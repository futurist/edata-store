import edata from 'edata';
/**
 * The default Global Cache for all the store
 */
export var storeConfig = {
    cache: {
        '': {}
    },
    edata: {}
};
/**
 * Get store from seperate namespace
 * @param namespace {string} The namespace of global cache store
 * @param initStore {Function} init function for first init namespace
 * @param cache {Object} The global cache store
 * @returns {edataRoot} The edata root instance
 */
export function getStore(namespace, initStore, cache) {
    if (initStore === void 0) { initStore = (function (e) { return edata({}, storeConfig.edata); }); }
    if (cache === void 0) { cache = storeConfig.cache['']; }
    namespace = namespace || '';
    return namespace in cache ? cache[namespace] : cache[namespace] = initStore({ namespace: namespace, cache: cache });
}
/**
 * Get 2 levels store from global cache store
 * @param namespace1 {string} The level1 namespace of global cache store, namespace2 is level1
 * @param cache {Object} The global cache store
 * @returns {Function} (namespace2: string, initStore = (e => edata({}))) => edataRoot
 */
export function getStore2(namespace1, cache) {
    if (cache === void 0) { cache = storeConfig.cache; }
    namespace1 = namespace1 || '';
    var namedCache = namespace1 in cache ? cache[namespace1] : cache[namespace1] = {};
    return function (namespace2, initStore) {
        if (initStore === void 0) { initStore = (function (e) { return edata({}, storeConfig.edata); }); }
        namespace2 = namespace2 || '';
        return getStore(namespace2, initStore, namedCache);
    };
}
