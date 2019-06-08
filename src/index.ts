import edata, {edataRoot} from 'edata'

/**
 * The default Global Cache for all the store
 */
export const defaultCache: any = {
    '': {}
}

/**
 * Get store from seperate namespace
 * @param namespace {string} The namespace of global cache store
 * @param initStore {Function} init function for first init namespace
 * @param cache {Object} The global cache store
 * @returns {edataRoot} The edata root instance
 */
export function getStore(namespace: string, initStore = (e => edata({})), cache = defaultCache['']) : edataRoot  {
    namespace = namespace || ''
    return namespace in cache ? cache[namespace] : cache[namespace] = initStore({ namespace, cache })
}

/**
 * Get 2 levels store from global cache store
 * @param namespace1 {string} The level1 namespace of global cache store, namespace2 is level1
 * @param cache {Object} The global cache store
 * @returns {Function} (namespace2: string, initStore = (e => edata({}))) => edataRoot
 */
export function getStore2(namespace1: string, cache = defaultCache) {
    namespace1 = namespace1 || ''
    const namedCache = namespace1 in cache ? cache[namespace1] : cache[namespace1] = {}
    return (namespace2: string, initStore = (e => edata({}))) => {
        namespace2 = namespace2 || ''
        return getStore(namespace2, initStore, namedCache)
    }
}
