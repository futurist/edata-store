import edata, {edataRoot} from 'edata'

export const defaultCache: any = {}

export function getStore(namespace, initStore = (e => edata({})), cache = defaultCache) : edataRoot  {
    return namespace in cache ? cache[namespace] : cache[namespace] = initStore({ namespace, cache })
}

export function getStore2(namespace1, cache = defaultCache) {
    const namedCache = namespace1 in cache ? cache[namespace1] : cache[namespace1] = {}
    return (namespace2, initStore = (e => edata({}))) => {
        return getStore(namespace2, initStore, namedCache)
    }
}
