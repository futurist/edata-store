import edata, { edataRoot, IOptions } from 'edata'

/**
 * The default Global Cache for all the store
 */
export const cacheStore:any = {}

/**
 * Init store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @param initData {any} The edata initData
 * @param edataConfig {IOptions} The edata init iOptions
 * @returns {edataRoot} The edata root instance
 */
export function initStore(namespace: string = 'default', initData:any = {}, edataConfig?: Partial<IOptions>): edataRoot {
    return cacheStore[namespace] = edata(initData, edataConfig)
}

/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @returns {edataRoot} The edata root instance
 */
export function getStore(namespace: string = 'default'): edataRoot {
    if(namespace in cacheStore){
        return cacheStore[namespace]
    } else {
        throw new Error(`cannot find '${namespace}' in edataStore, please call "initStore('${namespace}')" first!`)
    }
}
