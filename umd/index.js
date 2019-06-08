(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "edata"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var edata_1 = require("edata");
    exports.defaultCache = {};
    function getStore(namespace, initStore, cache) {
        if (initStore === void 0) { initStore = (function (e) { return edata_1.default({}); }); }
        if (cache === void 0) { cache = exports.defaultCache; }
        return namespace in cache ? cache[namespace] : cache[namespace] = initStore({ namespace: namespace, cache: cache });
    }
    exports.getStore = getStore;
    function getStore2(namespace1, cache) {
        if (cache === void 0) { cache = exports.defaultCache; }
        var namedCache = namespace1 in cache ? cache[namespace1] : cache[namespace1] = {};
        return function (namespace2, initStore) {
            if (initStore === void 0) { initStore = (function (e) { return edata_1.default({}); }); }
            return getStore(namespace2, initStore, namedCache);
        };
    }
    exports.getStore2 = getStore2;
});
//# sourceMappingURL=index.js.map