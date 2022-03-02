import GameDataClassDefinition from "./GameDataClassDefinition";
/**
 * @export
 * @class D2oReader
 */
export default class D2oReader {
    classes: Map<number, GameDataClassDefinition>;
    private indexes;
    private _reader;
    private _streamStartIndex;
    private _contentOffset;
    /**
     * Creates an instance of D2oReader.
     * @param {string} d2oFilePath
     * @memberof D2oReader
     */
    constructor(d2oFilePath: string);
    /**
     * @template T
     * @param {{ new (): T }} klass
     * @param {number} idx
     * @returns {T}
     * @memberof D2oReader
     */
    readObject<T>(klass: {
        new (): T;
    }, idx: number): T;
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
    readObjects<T, A>(klass: new () => T, f?: (e: T) => boolean, limit?: number, map?: (e: T) => A): T[];
    /**
     * @private
     * @memberof D2oReader
     */
    private _init;
    /**
     * @private
     * @memberof D2oReader
     */
    private _readIndexTable;
    /**
     * @private
     * @memberof D2oReader
     */
    private _readClassTable;
    /**
     * @private
     * @template T
     * @param {GameDataClassDefinition} classDefinition
     * @param {IDataCenter<T>} klass
     * @returns {boolean}
     * @memberof D2oReader
     */
    private isClassOrSubClass;
}
