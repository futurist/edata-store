import edata from 'edata';
/**
 * The default Global Cache for all the store
 */
export var cacheStore = {};
/**
 * Initialize store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore, empty for ''
 * @param initData {any} The edata initData
 * @param edataOptions {IOptions} The edata Initialize IOptions
 * @returns {edataRoot} The edata root instance
 */
export function initStore(namespace, initData, edataOptions) {
    if (initData === void 0) { initData = {}; }
    var ns = nomalizeNamespace(namespace);
    if (ns in cacheStore) {
        throw new Error("'" + ns + "' in edataStore already initialized!");
    }
    else {
        return cacheStore[ns] = edata(initData, edataOptions);
    }
}
/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore, empty for ''
 * @returns {edataRoot} The edata root instance
 */
export function getStore(namespace) {
    var ns = nomalizeNamespace(namespace);
    if (ns in cacheStore) {
        return cacheStore[ns];
    }
    else {
        throw new Error("cannot find '" + ns + "' in edataStore, please call \"initStore('" + ns + "')\" first!");
    }
}
function nomalizeNamespace(namespace) {
    return namespace == null ? '' : String(namespace);
}
