import { ByteArray } from "asdata";
import GameDataClassDefinition from "./GameDataClassDefinition";
import { GameDataTypeEnum } from "./GameDataTypeEnum";

const NULL_IDENTIFIER = -1431655766;

/**
 * Field of Class definition
 * @export
 * @class GameDataField
 */
export default class GameDataField {
  public readData: (
    data: ByteArray,
    classes: Map<number, GameDataClassDefinition>
  ) => any;
  public type: GameDataTypeEnum;
  public innerField: GameDataField;

  /**
   * Creates an instance of GameDataField.
   * @param {string} name
   * @memberof GameDataField
   */
  constructor(public name: string) {
    //
  }

  /**
   * Read type of field
   * @param {ByteArray} data
   * @memberof GameDataField
   */
  public readType(data: ByteArray): void {
    const gameDataType: GameDataTypeEnum = data.readInt();
    this.type = gameDataType;
    this.readData = this.getReadMethod(gameDataType, data);
  }

  /**
   * Read method
   * @param {GameDataTypeEnum} type
   * @param {ByteArray} data
   * @memberof GameDataField
   */
  public getReadMethod(type: GameDataTypeEnum, data: ByteArray) {
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
        this.innerField.readType(data);
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
   * @param {ByteArray} data
   * @param {Map<number,GameDataClassDefinition>} classes
   * @returns {any[]}
   * @memberof GameDataField
   */
  public readVector(
    data: ByteArray,
    classes: Map<number, GameDataClassDefinition>
  ): any[] {
    const vectorLen = data.readInt();
    const vector = [];
    let i = 0;
    while (i < vectorLen) {
      vector.push(this.innerField.readData(data, classes));
      i++;
    }
    return vector;
  }

  /**
   * Read Object
   * @param {ByteArray} data
   * @param {Map<number,GameDataClassDefinition>} classes
   * @returns {object}
   * @memberof GameDataField
   */
  public readObject(
    data: ByteArray,
    classes: Map<number, GameDataClassDefinition>
  ): object {
    const classId = data.readInt();
    if (classId === NULL_IDENTIFIER) {
      return null;
    }
    const classDefinition = classes.get(classId);
    return classDefinition.read(data, classes);
  }

  /**
   * Read Integer
   * @param {ByteArray} data
   * @returns {number}
   * @memberof GameDataField
   */
  public readInteger(data: ByteArray): number {
    return data.readInt();
  }

  /**
   * Read Boolean
   * @param {ByteArray} data
   * @returns {boolean}
   * @memberof GameDataField
   */
  public readBoolean(data: ByteArray): boolean {
    return data.readBoolean();
  }

  /**
   * Read String
   * @param {ByteArray} data
   * @returns {string}
   * @memberof GameDataField
   */
  public readString(data: ByteArray): string {
    let result = data.readUTF();
    if (result === "null") {
      result = null;
    }
    return result;
  }

  /**
   * Read Number
   * @param {ByteArray} data
   * @returns {number}
   * @memberof GameDataField
   */
  public readNumber(data: ByteArray): number {
    return data.readDouble();
  }

  /**
   * Read I18n ID
   * @param {ByteArray} data
   * @returns {number}
   * @memberof GameDataField
   */
  public readI18n(data: ByteArray): number {
    return data.readInt();
  }

  /**
   * Read Unsigned integer
   * @param {ByteArray} data
   * @returns {number}
   * @memberof GameDataField
   */
  public readUnsignedInteger(data: ByteArray): number {
    return data.readUnsignedInt();
  }
}
