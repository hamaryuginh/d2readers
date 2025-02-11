import { ByteArray } from "asdata";
import * as fs from "fs";
import { IEntry } from "./IEntry";
import { IText } from "./IText";
/**
 * Allow user to read d2i files
 *
 * @export
 * @class I18nFileAccessor
 */
export default class I18nFileAccessor {
  public static _container: any;

  /**
   * Register d2i files
   *
   * @param {...Object} entry
   * @param {string} entry.key - used when you call get methods
   * @param {string} entry.path - full path of d2i file
   */
  public static register(...entries: IEntry[]): void {
    if (!this._container) {
      this._container = {};
    }
    for (const arg of entries) {
      this._container[arg.key] = this.createEntry(arg.path);
    }
  }

  /**
   * Override id
   *
   * @param {string}
   * @param {number}
   * @param {number}
   */
  public static overrideId(key: string, idx1: number, idx2: number): void {
    this._container[key]._indexes[idx1] = this._container[key]._indexes[idx2];
    this._container[key]._unDiacriticalIndex[idx1] = this._container[
      key
    ]._unDiacriticalIndex[idx2];
  }

  /**
   * Get order index
   *
   * @param {string}
   * @param {number}
   * @return {number}
   */
  public static getOrderIndex(key: string, idx: number): number {
    return this._container[key]._textSortIndex[idx];
  }

  /**
   * Get text
   *
   * @param {string}
   * @param {number}
   * @return {string}
   */
  public static getText(key: string, idx: number): string {
    if (!this._container[key]._indexes) {
      return null;
    }
    const position = this._container[key]._indexes[idx];
    if (!position) {
      return null;
    }
    if (this._container[key]._directBuffer === null) {
      this._container[key]._stream.position = position;
      return this._container[key]._stream.readUTF();
    }
    this._container[key]._directBuffer.position = position;
    return this._container[key]._directBuffer.readUTF();
  }

  /**
   * Get undiacritical text
   *
   * @param {string}
   * @param {number}
   * @return {string}
   */
  public static getUnDiacriticalText(key: string, idx: number): string {
    if (!this._container[key]._unDiacriticalIndex) {
      return null;
    }
    const position = this._container[key]._unDiacriticalIndex[idx];
    if (!position) {
      return null;
    }
    if (this._container[key]._directBuffer === null) {
      this._container[key]._stream.position = position;
      return this._container[key]._stream.readUTF();
    }
    this._container[key]._directBuffer.position = position;
    return this._container[key]._directBuffer.readUTF();
  }

  /**
   * Verify if text exist
   *
   * @param {number} idx
   * @return {boolean}
   */
  public static hasText(key: string, idx: number): boolean {
    return (
      Boolean(this._container[key]._indexes) &&
      Boolean(this._container[key]._indexes[idx])
    );
  }

  /**
   * Get named text
   *
   * @param {string}
   * @param {string}
   * @return {string}
   */
  public static getNamedText(key: string, name: string): string {
    if (!this._container[key]._textIndexes) {
      return null;
    }
    if (this._container[key]._textIndexesOverride[name]) {
      key = this._container[key]._textIndexesOverride[name];
    }
    const position = this._container[key]._textIndexes[name];
    if (!position) {
      return null;
    }
    this._container[key]._stream.position = position;
    return this._container[key]._stream.readUTF();
  }

  /**
   * Verify if named text exists
   *
   * @param {string}
   * @param {string}
   * @return {boolean}
   */
  public static hasNamedText(key: string, name: string): boolean {
    return (
      Boolean(this._container[key]._textIndexes) &&
      Boolean(this._container[key]._textIndexes[name])
    );
  }

  /**
   * Use direct buff
   *
   * @param {string}
   * @param {boolean}
   */
  public static useDirectBuffer(
    key: string,
    enableDirectBuffer: boolean
  ): void {
    if (!enableDirectBuffer) {
      this._container[key]._directBuffer = null;
      return;
    }
    this._container[key]._directBuffer = new ByteArray();
    this._container[key]._stream.position = 0;
    this._container[key]._stream.readBytes(this._container[key]._directBuffer);
  }

  /**
   * Get all text
   *
   * @param {string}
   * @param {function}
   * @return {Array}
   */
  public static getTexts(
    key: string,
    f?: (e: IText) => boolean,
    limit?: number
  ): IText[] {
    const keys = Object.keys(this._container[key]._indexes);
    const result = [];
    for (const k of keys) {
      const item: IText = {
        id: parseInt(k, 10),
        text: this.getText(key, parseInt(k, 10))
      };
      if (!f || f(item)) {
        result.push(item);
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
    }

    return result;
  }

  /**
   * Create entry
   *
   * @private
   * @param {string}
   * @returns {Object}
   */
  private static createEntry(filename: string) {
    const entry: any = {};
    entry._directBuffer = null;
    entry._stream = new ByteArray(fs.readFileSync(filename).buffer);
    entry._textIndexes = {};
    entry._indexes = {};
    entry._textIndexesOverride = {};
    entry._textSortIndex = {};
    entry._unDiacriticalIndex = {};
    entry._textCount = 0;
    entry._stream.position = entry._stream.readInt();

    let m = entry._stream.readInt();
    let i = 0;
    let key = -1;
    let value = -1;
    let isNotValue = false;

    while (i < m) {
      key = entry._stream.readInt();
      isNotValue = entry._stream.readBoolean();
      value = entry._stream.readInt();
      entry._indexes[key] = value;
      if (isNotValue) {
        i += 4;
        value = entry._stream.readInt();
      }
      entry._unDiacriticalIndex[key] = value;
      i += 9;
    }

    m = entry._stream.readInt();

    let position = 0;

    while (m > 0) {
      position = entry._stream.position;
      key = entry._stream.readUTF();
      value = entry._stream.readInt();
      entry._textCount++;
      entry._textIndexes[key] = value;
      m -= entry._stream.position - position;
    }

    m = entry._stream.readInt();
    i = 0;

    while (m > 0) {
      position = entry._stream.position;
      entry._textSortIndex[entry._stream.readInt()] = ++i;
      m -= entry._stream.position - position;
    }

    return entry;
  }
}
