import * as fs from "fs";
import * as path from "path";
import D2oReader from "./D2oReader";

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
  public static init(d2oFilesPath: string): void {
    this.d2oFilesPath = d2oFilesPath;
    this.loadReaders();
  }

  /**
   * Get object from d2o file
   * @static
   * @template T
   * @param {{ new (): T }} klass
   * @param {number} idx
   * @returns {T}
   * @memberof GameDataFileAccessor
   */
  public static getObject<T>(klass: { new (): T }, idx: number): T {
    const reader: D2oReader = this._readers.get(klass.name);

    return reader.readObject<T>(klass, idx);
  }

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
  public static getObjects<T, A>(
    klass: new () => T,
    f?: (e: T) => boolean,
    limit?: number,
    map?: (e: T) => A
  ): T[] {
    const reader: D2oReader = this._readers.get(klass.name);

    return reader.readObjects<T, A>(klass, f, limit, map); // Todo: how to reuturn A[] and not T[] if map is provided
  }

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
  public static map<T, A>(klass: { new (): T }, m: (e: T) => A): A[] {
    return (this.getObjects<T, A>(klass, null, 0, m) as any) as A[]; // Todo: find another way without any cast
  }

  /**
   * List of classNames present in different .d2o files
   * @private
   * @static
   * @type {string[]}
   * @memberof GameDataFileAccessor
   */
  private static _ignoredClasses: string[] = [];

  /**
   * Map of className => D2oReader
   * @private
   * @static
   * @type {Map<string, D2oReader>}
   * @memberof GameDataFileAccessor
   */
  private static _readers: Map<string, D2oReader> = new Map<
    string,
    D2oReader
  >();

  /**
   * Must be provided in init()
   * @private
   * @static
   * @type {string}
   * @memberof GameDataFileAccessor
   */
  private static d2oFilesPath: string;

  /**
   * Creates the D2oReaders for every .d2o file in the d2oFilesPath dir.
   * @private
   * @static
   * @memberof GameDataFileAccessor
   */
  private static loadReaders(): void {
    const d2oFiles = fs
      .readdirSync(this.d2oFilesPath)
      .filter(file => file.endsWith(".d2o"));

    d2oFiles.map(file => {
      const fileName = path.basename(file, ".d2o");
      this.addReader(fileName);
    });
  }

  /**
   * Creates the D2oReader then maps the classes inside the .d2o to it.
   * @private
   * @static
   * @param {string} fileName
   * @returns {D2oReader}
   * @memberof GameDataFileAccessor
   */
  private static addReader(fileName: string): void {
    const d2oFilePath = path.join(this.d2oFilesPath, fileName + ".d2o");
    const d2oReader = new D2oReader(d2oFilePath);
    const classes = d2oReader.classes;

    for (const { className } of classes.values()) {
      if (this._ignoredClasses.includes(className)) {
        continue;
      }
      if (this._readers.has(className)) {
        this._ignoredClasses.push(className);
        this._readers.delete(className);
      } else {
        this._readers.set(className, d2oReader);
      }
    }
  }
}
