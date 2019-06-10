import edata from 'edata';
/**
 * The default Global Cache for all the store
 */
export var cacheStore = {};
/**
 * Init store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore
 * @param initData {any} The edata initData
 * @param edataConfig {IOptions} The edata init iOptions
 * @returns {edataRoot} The edata root instance
 */
export function initStore(namespace, initData, edataConfig) {
    if (namespace === void 0) { namespace = ''; }
    return cacheStore[namespace] = edata(initData, edataConfig);
}
/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore
 * @returns {edataRoot} The edata root instance
 */
export function getStore(namespace) {
    if (namespace === void 0) { namespace = ''; }
    if (namespace in cacheStore) {
        return cacheStore[namespace];
    }
    else {
        throw new Error("cannot find '" + namespace + "' in edataStore, please call \"initStore('" + namespace + "')\" first!");
    }
}
