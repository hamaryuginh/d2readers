import { ByteArray } from "asdata";
import * as fs from "fs";
import GameDataClassDefinition from "./GameDataClassDefinition";
import { IEntry } from "./IEntry";

const ANKAMA_SIGNED_FILE_HEADER = "AKSF";

/**
 * Allow user to read d2o files
 *
 * @export
 * @class GameDataFileAccessor
 */
export default class GameDataFileAccessor {
  public static _container: any;

  /**
   * Register all d2o files
   */
  public static register(...entries: IEntry[]): void {
    if (!this._container) {
      this._container = {};
    }
    for (let i = 0; i < arguments.length; i++) {
      this.createEntry(arguments[i].key, arguments[i].path);
    }
  }

  /**
   * Get class definition by index
   *
   * @param {string}
   * @param {number}
   * @returns {Object}
   */
  public static getClassDefinition(key: string, idx: number): any {
    return this._container[key]._classes[idx];
  }

  /**
   * Get d2o items length
   *
   * @param {string}
   * @returns {number}
   */
  public static getlength(key) {
    return this._container[key]._length;
  }

  /**
   * Get object by index
   *
   * @param {string}
   * @param {number}
   * @returns {Object}
   */
  public static getObject<T>(key: string, idx: number): T {
    if (!this._container[key]._indexes) {
      return null;
    }
    const loc3 = this._container[key]._indexes[idx];
    if (!loc3) {
      return null;
    }
    this._container[key]._stream.position = loc3;
    return this._container[key]._classes[this._container[key]._stream.readInt()].read(key, this._container[key]._stream);
  }

  /**
   * Get objects from d2o file
   *
   * @param {string}
   * @param {function}
   * @param {number} [limit=0]
   * @param {function}
   * @returns {Array<Object>}
   */
  public static getObjects<T>(key: string, f?: (e: T) => boolean, limit?: number, map?: (e: any) => T): T[] {
    if (!this._container[key]._length) {
      return null;
    }
    this._container[key]._stream.position = this._container[key]._streamStartIndex;
    const result = [];
    for (let i = 0; i < this._container[key]._length; i++) {
      const item = this._container[key]._classes[this._container[key]._stream.readInt()].read(key, this._container[key]._stream);
      if (!f || f(item)) {
        result.push(map ? map(item) : item);
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
    }
    return result;
  }

  /**
   * Mapping of objects as you wanted
   *
   * @param {string}
   * @param cb {function}
   * @returns {Array<Object>}
   */
  public static map<T>(key: string, m: (e: any) => T): T[] {
    return this.getObjects(key, null, 0, m);
  }

  /**
   * Read class definition from d2o file
   *
   * @private
   * @param {string}
   * @param {number}
   * @param {bytearray2}
   */
  public static readClassDefinition(key, idx, data) {
    let loc8 = null;
    const loc4 = data.readUTF();
    const loc5 = data.readUTF();
    const classDefinition = new GameDataClassDefinition(loc5, loc4);
    const loc7 = data.readInt();
    let loc10 = 0;
    while (loc10 < loc7) {
      loc8 = data.readUTF();
      classDefinition.addField(key, loc8, data);
      loc10++;
    }
    this._container[key]._classes[idx] = classDefinition;
  }
  /**
   * Create d2o entry from filename
   *
   * @private
   * @param {string}
   * @param {string}
   */
  private static createEntry(key: string, filename: string) {
    const entry: any = {};
    this._container[key] = entry;
    entry._stream = new ByteArray(fs.readFileSync(filename).buffer);
    entry._streamStartIndex = 7;
    let loc8 = 0;
    let loc9 = 0;
    let loc14 = 0;
    let loc17 = 0;
    entry._indexes = {};
    entry._length = 0;
    entry._classes = {};
    let loc4 = 0;
    let loc5 = entry._stream.readMultiByte(3, "ASCII");
    if (loc5 !== "D2O") {
      entry._stream.clear();
      try {
        loc5 = entry._stream.readUTF();
      } catch (e) {
        //
      }
      if (loc5 !== ANKAMA_SIGNED_FILE_HEADER) {
        throw new Error("Malformated game data file.");
      }
      entry._stream.readShort();
      loc17 = entry._stream.readInt();
      entry._stream.position += loc17;
      loc4 = entry._stream.position;
      entry._streamStartIndex = loc4 + 7;
      loc5 = entry._stream.readMultiByte(3, "ASCII");
      if (loc5 !== "D2O") {
        throw new Error("Malformated game data file.");
      }
    }
    const loc6 = entry._stream.readInt();
    entry._stream.position = loc4 + loc6;
    const loc7 = entry._stream.readInt();
    let loc11 = 0;
    while (loc11 < loc7) {
      loc8 = entry._stream.readInt();
      loc9 = entry._stream.readInt();
      entry._indexes[loc8] = loc4 + loc9;
      entry._length++;
      loc11 += 8;
    }
    const loc13 = entry._stream.readInt();
    let loc15 = 0;
    while (loc15 < loc13) {
      loc14 = entry._stream.readInt();
      this.readClassDefinition(key, loc14, entry._stream);
      loc15++;
    }
  }
}
