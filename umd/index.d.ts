import { edataRoot, IOptions } from 'edata';
/**
 * The default Global Cache for all the store
 */
export declare const cacheStore: any;
/**
 * Initialize store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore, empty for ''
 * @param initData {any} The edata initData
 * @param edataOptions {IOptions} The edata Initialize IOptions
 * @returns {edataRoot} The edata root instance
 */
export declare function initStore(namespace?: string, initData?: any, edataOptions?: Partial<IOptions>): edataRoot;
/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore, empty for ''
 * @returns {edataRoot} The edata root instance
 */
export declare function getStore(namespace?: string): edataRoot;
