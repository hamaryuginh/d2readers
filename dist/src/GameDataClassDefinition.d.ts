import { ByteArray } from "asdata";
import GameDataField from "./GameDataField";
/**
 * Class definition
 * @export
 * @class GameDataClassDefinition
 */
export default class GameDataClassDefinition {
    className: string;
    packageName: string;
    fields: GameDataField[];
    /**
     * Creates an instance of GameDataClassDefinition.
     * @param {ByteArray} data
     * @memberof GameDataClassDefinition
     */
    constructor(data: ByteArray);
    /**
     * Add field to this class definition
     * @param {string} classname
     * @param {ByteArray} data
     * @memberof GameDataClassDefinition
     */
    addField(classname: string, data: ByteArray): void;
    /**
     * Read from data
     * @template T
     * @param {ByteArray} data
     * @param {Map<number,GameDataClassDefinition>} classes
     * @returns {T}
     * @memberof GameDataClassDefinition
     */
    read<T>(data: ByteArray, classes: Map<number, GameDataClassDefinition>): T;
}
