import edata from 'edata';
export var defaultCache = {};
export function getStore(namespace, initStore, cache) {
    if (initStore === void 0) { initStore = (function (e) { return edata({}); }); }
    if (cache === void 0) { cache = defaultCache; }
    return namespace in cache ? cache[namespace] : cache[namespace] = initStore({ namespace: namespace, cache: cache });
}
export function getStore2(namespace1, cache) {
    if (cache === void 0) { cache = defaultCache; }
    var namedCache = namespace1 in cache ? cache[namespace1] : cache[namespace1] = {};
    return function (namespace2, initStore) {
        if (initStore === void 0) { initStore = (function (e) { return edata({}); }); }
        return getStore(namespace2, initStore, namedCache);
    };
}
//# sourceMappingURL=index.js.map