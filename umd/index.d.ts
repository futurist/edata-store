import { edataRoot, IOptions } from 'edata';
/**
 * The default Global Cache for all the store
 */
export declare const cacheStore: any;
/**
 * Init store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @param initData {any} The edata initData
 * @param edataConfig {IOptions} The edata init iOptions
 * @returns {edataRoot} The edata root instance
 */
export declare function initStore(namespace?: string, initData?: any, edataConfig?: Partial<IOptions>): edataRoot;
/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @returns {edataRoot} The edata root instance
 */
export declare function getStore(namespace?: string): edataRoot;
