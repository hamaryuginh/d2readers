import { ByteArray } from "asdata";
import GameDataField from "./GameDataField";

/**
 * Class definition
 *
 * @private
 * @class GameDataClassDefinition
 */
export default class GameDataClassDefinition {
  private _class: string;
  private _fields: GameDataField[];

  /**
   * Creates an instance of GameDataClassDefinition.
   *
   * @param {string}
   * @param {string}
   */
  constructor(ns: string, classname: string) {
    this._class = ns + "." + classname;
    this._fields = [];
  }

  /**
   * Add filed to this class definition
   *
   * @param {string}
   * @param {string}
   * @param {ByteArray}
   */
  public addField(key: string, classname: string, data: ByteArray) {
    const field = new GameDataField(classname);
    field.readType(key, data);
    this._fields.push(field);
  }

  /**
   * Fields getter
   *
   * @private
   * @readonly
   */
  private get fields() {
    return this._fields;
  }

  /**
   * Read from data
   *
   * @private
   * @param {string}
   * @param {ByteArray}
   * @returns {Object}
   */
  private read(key: string, data: ByteArray) {
    const _definition = {};
    this._fields.forEach((field) => {
      _definition[field.name] = field.readData(data, key);
    });

    return _definition;
  }
}
