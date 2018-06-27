import { ByteArray } from "asdata";
import * as datacenter from "./datacenter";
import GameDataField from "./GameDataField";

/**
 * Class definition
 * @export
 * @class GameDataClassDefinition
 */
export default class GameDataClassDefinition {
  public className: string;
  public packageName: string;
  public fields: GameDataField[];

  /**
   * Creates an instance of GameDataClassDefinition.
   * @param {ByteArray} data
   * @memberof GameDataClassDefinition
   */
  constructor(data: ByteArray) {
    this.className = data.readUTF();
    this.packageName = data.readUTF();
    this.fields = [];

    const fieldCount: number = data.readInt();
    let fieldName;
    let i = 0;

    while (i < fieldCount) {
      fieldName = data.readUTF();
      this.addField(fieldName, data);
      i++;
    }
  }

  /**
   * Add field to this class definition
   * @param {string} classname
   * @param {ByteArray} data
   * @memberof GameDataClassDefinition
   */
  public addField(classname: string, data: ByteArray) {
    const field = new GameDataField(classname);
    field.readType(data);
    this.fields.push(field);
  }

  /**
   * Read from data
   * @template T
   * @param {ByteArray} data
   * @param {Map<number,GameDataClassDefinition>} classes
   * @returns {T}
   * @memberof GameDataClassDefinition
   */
  public read<T>(
    data: ByteArray,
    classes: Map<number, GameDataClassDefinition>
  ): T {
    const klass = new datacenter[this.className]() as T;
    this.fields.forEach(field => {
      klass[field.name] = field.readData(data, classes);
    });

    return klass;
  }
}
