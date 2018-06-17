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
    for (const arg of entries) {
      this.createEntry(arg.key, arg.path);
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
    const pointer = this._container[key]._indexes[idx];
    if (!pointer) {
      return null;
    }
    this._container[key]._stream.position = pointer;
    return this._container[key]._classes[
      this._container[key]._stream.readInt()
    ].read(key, this._container[key]._stream);
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
  public static getObjects<T>(
    key: string,
    f?: (e: T) => boolean,
    limit?: number,
    map?: (e: any) => T
  ): T[] {
    if (!this._container[key]._length) {
      return null;
    }
    this._container[key]._stream.position = this._container[
      key
    ]._streamStartIndex;
    const result = [];
    for (let i = 0; i < this._container[key]._length; i++) {
      const item = this._container[key]._classes[
        this._container[key]._stream.readInt()
      ].read(key, this._container[key]._stream);
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
    let fieldName = null;
    const className = data.readUTF();
    const packageName = data.readUTF();
    const classDefinition = new GameDataClassDefinition(packageName, className);
    const fieldsCount = data.readInt();
    let i = 0;
    while (i < fieldsCount) {
      fieldName = data.readUTF();
      classDefinition.addField(key, fieldName, data);
      i++;
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
    const fileBuffer = fs.readFileSync(filename);
    entry._stream = new ByteArray(
      fileBuffer.buffer,
      fileBuffer.byteOffset,
      fileBuffer.byteLength
    );
    entry._streamStartIndex = 7;
    let indexKey = 0;
    let pointer = 0;
    let classIdentifier = 0;
    let len = 0;
    entry._indexes = {};
    entry._length = 0;
    entry._classes = {};
    let contentOffset = 0;
    let headers = entry._stream.readMultiByte(3, "ASCII");
    if (headers !== "D2O") {
      entry._stream.clear();
      try {
        headers = entry._stream.readUTF();
      } catch (e) {
        //
      }
      if (headers !== ANKAMA_SIGNED_FILE_HEADER) {
        throw new Error("Malformated game data file.");
      }
      entry._stream.readShort();
      len = entry._stream.readInt();
      entry._stream.position += len;
      contentOffset = entry._stream.position;
      entry._streamStartIndex = contentOffset + 7;
      headers = entry._stream.readMultiByte(3, "ASCII");
      if (headers !== "D2O") {
        throw new Error("Malformated game data file.");
      }
    }
    const indexesPointer = entry._stream.readInt();
    entry._stream.position = contentOffset + indexesPointer;
    const indexesLength = entry._stream.readInt();
    let i = 0;
    while (i < indexesLength) {
      indexKey = entry._stream.readInt();
      pointer = entry._stream.readInt();
      entry._indexes[indexKey] = contentOffset + pointer;
      entry._length++;
      i += 8;
    }
    const classesCount = entry._stream.readInt();
    let j = 0;
    while (j < classesCount) {
      classIdentifier = entry._stream.readInt();
      this.readClassDefinition(key, classIdentifier, entry._stream);
      j++;
    }
  }
}
