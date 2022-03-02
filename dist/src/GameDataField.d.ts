import { ByteArray } from "asdata";
import GameDataClassDefinition from "./GameDataClassDefinition";
import { GameDataTypeEnum } from "./GameDataTypeEnum";
/**
 * Field of Class definition
 * @export
 * @class GameDataField
 */
export default class GameDataField {
    name: string;
    readData: (data: ByteArray, classes: Map<number, GameDataClassDefinition>) => any;
    type: GameDataTypeEnum;
    innerField: GameDataField;
    /**
     * Creates an instance of GameDataField.
     * @param {string} name
     * @memberof GameDataField
     */
    constructor(name: string);
    /**
     * Read type of field
     * @param {ByteArray} data
     * @memberof GameDataField
     */
    readType(data: ByteArray): void;
    /**
     * Read method
     * @param {GameDataTypeEnum} type
     * @param {ByteArray} data
     * @memberof GameDataField
     */
    getReadMethod(type: GameDataTypeEnum, data: ByteArray): ((data: ByteArray) => number) | ((data: ByteArray) => boolean) | ((data: ByteArray) => string) | ((data: ByteArray, classes: Map<number, GameDataClassDefinition>) => object);
    /**
     * Read list
     * @param {ByteArray} data
     * @param {Map<number,GameDataClassDefinition>} classes
     * @returns {any[]}
     * @memberof GameDataField
     */
    readVector(data: ByteArray, classes: Map<number, GameDataClassDefinition>): any[];
    /**
     * Read Object
     * @param {ByteArray} data
     * @param {Map<number,GameDataClassDefinition>} classes
     * @returns {object}
     * @memberof GameDataField
     */
    readObject(data: ByteArray, classes: Map<number, GameDataClassDefinition>): object;
    /**
     * Read Integer
     * @param {ByteArray} data
     * @returns {number}
     * @memberof GameDataField
     */
    readInteger(data: ByteArray): number;
    /**
     * Read Boolean
     * @param {ByteArray} data
     * @returns {boolean}
     * @memberof GameDataField
     */
    readBoolean(data: ByteArray): boolean;
    /**
     * Read String
     * @param {ByteArray} data
     * @returns {string}
     * @memberof GameDataField
     */
    readString(data: ByteArray): string;
    /**
     * Read Number
     * @param {ByteArray} data
     * @returns {number}
     * @memberof GameDataField
     */
    readNumber(data: ByteArray): number;
    /**
     * Read I18n ID
     * @param {ByteArray} data
     * @returns {number}
     * @memberof GameDataField
     */
    readI18n(data: ByteArray): number;
    /**
     * Read Unsigned integer
     * @param {ByteArray} data
     * @returns {number}
     * @memberof GameDataField
     */
    readUnsignedInteger(data: ByteArray): number;
}
