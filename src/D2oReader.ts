import { ByteArray } from "asdata";
import * as fs from "fs";
import * as datacenter from "./datacenter";
import GameDataClassDefinition from "./GameDataClassDefinition";

const ANKAMA_SIGNED_FILE_HEADER = "AKSF";

/**
 * @export
 * @class D2oReader
 */
export default class D2oReader {
  public classes: Map<number, GameDataClassDefinition>;
  private indexes: Map<number, number>;
  private _reader: ByteArray;
  private _streamStartIndex: number;
  private _contentOffset: number;

  /**
   * Creates an instance of D2oReader.
   * @param {string} d2oFilePath
   * @memberof D2oReader
   */
  constructor(d2oFilePath: string) {
    this.classes = new Map<number, GameDataClassDefinition>();
    this.indexes = new Map<number, number>();
    this._init(d2oFilePath);
    this._readIndexTable();
    this._readClassTable();
  }

  /**
   * @template T
   * @param {{ new (): T }} klass
   * @param {number} idx
   * @returns {T}
   * @memberof D2oReader
   */
  public readObject<T>(klass: { new (): T }, idx: number): T {
    const pointer = this.indexes.get(idx);
    if (!pointer) {
      return null;
    }
    this._reader.position = pointer;
    const classId = this._reader.readInt();
    const classDefinition = this.classes.get(classId);
    // is this if needed ? useleess slowness? TODO test perf
    if (!this.isClassOrSubClass<T>(classDefinition, klass)) {
      throw new Error(
        `Wrong type: ${classDefinition.className} is not ${klass.name}`
      );
    }

    return classDefinition.read<T>(this._reader, this.classes);
  }

  /**
   * @template T
   * @template A
   * @param {new () => T} klass
   * @param {(e: T) => boolean} [f]
   * @param {number} [limit]
   * @param {(e: T) => A} [map]
   * @returns {T[]}
   * @memberof D2oReader
   */
  public readObjects<T, A>(
    klass: new () => T,
    f?: (e: T) => boolean,
    limit?: number,
    map?: (e: T) => A
  ): T[] {
    const pointer = this._streamStartIndex;
    if (!pointer) {
      return null;
    }
    this._reader.position = pointer;
    const result: T[] = [];
    let i = 0;
    while (i < this.indexes.size) {
      const classId = this._reader.readInt();
      const classDefinition = this.classes.get(classId);
      // is this if needed ? useleess slowness? TODO test perf
      if (!this.isClassOrSubClass<T>(classDefinition, klass)) {
        throw new Error(
          `Wrong type: ${classDefinition.className} is not ${klass.name}`
        );
      }
      const item = classDefinition.read<T>(this._reader, this.classes);

      if (!f || f(item)) {
        result.push(map ? ((map(item) as any) as T) : item); // Todo: find another way without any cast
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
      i += 1;
    }
    return result; // Todo: how to reuturn A[] and not T[] if map is provided
  }

  /**
   * @private
   * @memberof D2oReader
   */
  private _init = (d2oFilePath: string): void => {
    const fileBuffer = fs.readFileSync(d2oFilePath);
    this._reader = new ByteArray(
      fileBuffer.buffer,
      fileBuffer.byteOffset,
      fileBuffer.byteLength
    );
    this._streamStartIndex = 7;
    this._contentOffset = 0;
    let headers = this._reader.readMultiByte(3, "ASCII");
    if (headers !== "D2O") {
      this._reader.position = 0;
      try {
        headers = this._reader.readUTF();
      } catch (e) {
        //
      }
      if (headers !== ANKAMA_SIGNED_FILE_HEADER) {
        throw new Error("Malformated game data file.");
      }
      this._reader.readShort(); // formatVersion
      this._reader.position += this._reader.readInt();
      this._contentOffset = this._reader.position;
      this._streamStartIndex = this._contentOffset + 7;
      headers = this._reader.readMultiByte(3, "ASCII");
      if (headers !== "D2O") {
        throw new Error("Malformated game data file.");
      }
    }
  };

  /**
   * @private
   * @memberof D2oReader
   */
  private _readIndexTable = (): void => {
    let pointer = 0;
    let indexKey = 0;

    const indexPointerTable = this._reader.readInt();
    this._reader.position = this._contentOffset + indexPointerTable;
    const indexPointerTableLen = this._reader.readInt();

    let i = 0;
    while (i < indexPointerTableLen) {
      indexKey = this._reader.readInt();
      pointer = this._reader.readInt();
      this.indexes.set(indexKey, this._contentOffset + pointer);
      i += 8;
    }
  };

  /**
   * @private
   * @memberof D2oReader
   */
  private _readClassTable = (): void => {
    const classCount = this._reader.readInt();
    let classId;
    let i = 0;

    while (i < classCount) {
      classId = this._reader.readInt();
      this.classes.set(classId, new GameDataClassDefinition(this._reader));
      i++;
    }
  };

  /**
   * @private
   * @template T
   * @param {GameDataClassDefinition} classDefinition
   * @param {IDataCenter<T>} klass
   * @returns {boolean}
   * @memberof D2oReader
   */
  private isClassOrSubClass<T>(
    classDefinition: GameDataClassDefinition,
    klass: new () => T
  ): boolean {
    if (
      classDefinition.className === klass.name ||
      klass.isPrototypeOf(datacenter[classDefinition.className])
    ) {
      return true;
    }
    return false;
  }
}
