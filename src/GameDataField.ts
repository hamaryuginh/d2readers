import { ByteArray } from "asdata";
import D2O from "./GameDataFileAccessor";
import { GameDataTypeEnum } from "./GameDataTypeEnum";

const NULL_IDENTIFIER = -1431655766;

/**
 * Field of Class definition
 *
 * @private
 * @class GameDataField
 */
export default class GameDataField {
  public readData: (data: ByteArray, key: string) => any;
  public type: GameDataTypeEnum;
  public innerField: GameDataField;
  /**
   * Creates an instance of GameDataField.
   *
   * @param {string}
   */
  constructor(public name: string) {
    //
  }

  /**
   * Read type of field
   *
   * @private
   * @param {string}
   * @param {ByteArray}
   */
  public readType(key: string, data: ByteArray) {
    const gameDataType: GameDataTypeEnum = data.readInt();
    this.type = gameDataType;
    this.readData = this.getReadMethod(key, gameDataType, data);
  }

  /**
   * Read method
   *
   * @private
   * @param {string}
   * @param {GameDataTypeEnum}
   * @param {ByteArray}
   * @returns {Function}
   */
  public getReadMethod(key: string, type: GameDataTypeEnum, data: ByteArray) {
    switch (type) {
      case GameDataTypeEnum.INT:
        return this.readInteger;
      case GameDataTypeEnum.BOOLEAN:
        return this.readBoolean;
      case GameDataTypeEnum.STRING:
        return this.readString;
      case GameDataTypeEnum.NUMBER:
        return this.readNumber;
      case GameDataTypeEnum.I18N:
        return this.readI18n;
      case GameDataTypeEnum.UINT:
        return this.readUnsignedInteger;
      case GameDataTypeEnum.VECTOR:
        this.innerField = new GameDataField(data.readUTF());
        this.innerField.readType(key, data);
        return this.readVector;
      default:
        if (type > 0) {
          return this.readObject;
        }
        throw new Error("Unknown type '" + type + "'.");
    }
  }

  /**
   * Read list
   *
   * @private
   * @param {ByteArray}
   * @param {string}
   * @returns {Array<Object>}
   */
  public readVector(data: ByteArray, key: string) {
    const vectorLen = data.readInt();
    const vector = [];
    let i = 0;
    while (i < vectorLen) {
      vector.push(this.innerField.readData(data, key));
      i++;
    }
    return vector;
  }

  /**
   * Read Object
   *
   * @private
   * @param {ByteArray}
   * @param {string}
   * @returns {Object}
   */
  public readObject(data: ByteArray, key: string) {
    const loc4 = data.readInt();
    if (loc4 === NULL_IDENTIFIER) {
      return null;
    }
    const loc5 = D2O.getClassDefinition(key, loc4);
    return loc5.read(key, data);
  }

  /**
   * Read Integer
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readInteger(data: ByteArray) {
    return data.readInt();
  }

  /**
   * Read BOOLEAN
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readBoolean(data: ByteArray) {
    return data.readBoolean();
  }

  /**
   * Read String
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readString(data: ByteArray) {
    let result = data.readUTF();
    if (result === "null") {
      result = null;
    }
    return result;
  }

  /**
   * Read Number
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readNumber(data: ByteArray) {
    return data.readDouble();
  }

  /**
   * ReadI18n ID
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readI18n(data: ByteArray) {
    return data.readInt();
  }

  /**
   * Read Unsigned integer
   *
   * @private
   * @param {ByteArray}
   * @returns {Object}
   */
  public readUnsignedInteger(data: ByteArray) {
    return data.readUnsignedInt();
  }
}
