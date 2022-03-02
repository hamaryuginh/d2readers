import { IEntry } from "./IEntry";
import { IText } from "./IText";
/**
 * Allow user to read d2i files
 *
 * @export
 * @class I18nFileAccessor
 */
export default class I18nFileAccessor {
    static _container: any;
    /**
     * Register d2i files
     *
     * @param {...Object} entry
     * @param {string} entry.key - used when you call get methods
     * @param {string} entry.path - full path of d2i file
     */
    static register(...entries: IEntry[]): void;
    /**
     * Override id
     *
     * @param {string}
     * @param {number}
     * @param {number}
     */
    static overrideId(key: string, idx1: number, idx2: number): void;
    /**
     * Get order index
     *
     * @param {string}
     * @param {number}
     * @return {number}
     */
    static getOrderIndex(key: string, idx: number): number;
    /**
     * Get text
     *
     * @param {string}
     * @param {number}
     * @return {string}
     */
    static getText(key: string, idx: number): string;
    /**
     * Get undiacritical text
     *
     * @param {string}
     * @param {number}
     * @return {string}
     */
    static getUnDiacriticalText(key: string, idx: number): string;
    /**
     * Verify if text exist
     *
     * @param {number} idx
     * @return {boolean}
     */
    static hasText(key: string, idx: number): boolean;
    /**
     * Get named text
     *
     * @param {string}
     * @param {string}
     * @return {string}
     */
    static getNamedText(key: string, name: string): string;
    /**
     * Verify if named text exists
     *
     * @param {string}
     * @param {string}
     * @return {boolean}
     */
    static hasNamedText(key: string, name: string): boolean;
    /**
     * Use direct buff
     *
     * @param {string}
     * @param {boolean}
     */
    static useDirectBuffer(key: string, enableDirectBuffer: boolean): void;
    /**
     * Get all text
     *
     * @param {string}
     * @param {function}
     * @return {Array}
     */
    static getTexts(key: string, f?: (e: IText) => boolean, limit?: number): IText[];
    /**
     * Create entry
     *
     * @private
     * @param {string}
     * @returns {Object}
     */
    private static createEntry;
}
