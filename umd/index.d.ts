import { edataRoot } from 'edata';
/**
 * The default Global Cache for all the store
 */
export declare const defaultCache: any;
/**
 * Get store from seperate namespace
 * @param namespace {string} The namespace of global cache store
 * @param initStore {Function} init function for first init namespace
 * @param cache {Object} The global cache store
 * @returns {edataRoot} The edata root instance
 */
export declare function getStore(namespace?: string, initStore?: (e: any) => edataRoot, cache?: any): edataRoot;
/**
 * Get 2 levels store from global cache store
 * @param namespace1 {string} The level1 namespace of global cache store, namespace2 is level1
 * @param cache {Object} The global cache store
 * @returns {Function} (namespace2: string, initStore = (e => edata({}))) => edataRoot
 */
export declare function getStore2(namespace1?: string, cache?: any): (namespace2?: string, initStore?: (e: any) => edataRoot) => edataRoot;
