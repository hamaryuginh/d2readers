/**
 * Allow user to read d2o files
 *
 * @export
 * @class GameDataFileAccessor
 */
export default class GameDataFileAccessor {
    /**
     * Must be called before anything
     * @static
     * @param {string} d2oFilesPath
     * @memberof GameDataFileAccessor
     */
    static init(d2oFilesPath: string): void;
    /**
     * Get object from d2o file
     * @static
     * @template T
     * @param {{ new (): T }} klass
     * @param {number} idx
     * @returns {T}
     * @memberof GameDataFileAccessor
     */
    static getObject<T>(klass: {
        new (): T;
    }, idx: number): T;
    /**
     * Get objects from d2o file
     * @static
     * @template T
     * @template A
     * @param {new () => T} klass
     * @param {(e: T) => boolean} [f]
     * @param {number} [limit]
     * @param {(e: T) => A} [map]
     * @returns {T[]}
     * @memberof GameDataFileAccessor
     */
    static getObjects<T, A>(klass: new () => T, f?: (e: T) => boolean, limit?: number, map?: (e: T) => A): T[];
    /**
     * Mapping of objects as you wanted
     * @static
     * @template T
     * @template A
     * @param {{ new (): T }} klass
     * @param {(e: T) => A} m
     * @returns {A[]}
     * @memberof GameDataFileAccessor
     */
    static map<T, A>(klass: {
        new (): T;
    }, m: (e: T) => A): A[];
    /**
     * List of classNames present in different .d2o files
     * @private
     * @static
     * @type {string[]}
     * @memberof GameDataFileAccessor
     */
    private static _ignoredClasses;
    /**
     * Map of className => D2oReader
     * @private
     * @static
     * @type {Map<string, D2oReader>}
     * @memberof GameDataFileAccessor
     */
    private static _readers;
    /**
     * Must be provided in init()
     * @private
     * @static
     * @type {string}
     * @memberof GameDataFileAccessor
     */
    private static d2oFilesPath;
    /**
     * Creates the D2oReaders for every .d2o file in the d2oFilesPath dir.
     * @private
     * @static
     * @memberof GameDataFileAccessor
     */
    private static loadReaders;
    /**
     * Creates the D2oReader then maps the classes inside the .d2o to it.
     * @private
     * @static
     * @param {string} fileName
     * @returns {D2oReader}
     * @memberof GameDataFileAccessor
     */
    private static addReader;
}
