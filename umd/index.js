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
    /**
     * The default Global Cache for all the store
     */
    exports.cacheStore = {};
    /**
     * Initialize store for namespace, after that you can call getStore
     * @param namespace {string} The namespace of cacheStore, empty for 'default'
     * @param initData {any} The edata initData
     * @param edataOptions {IOptions} The edata Initialize IOptions
     * @returns {edataRoot} The edata root instance
     */
    function initStore(namespace, initData, edataOptions) {
        if (initData === void 0) { initData = {}; }
        var ns = nomalizeNamespace(namespace);
        if (ns in exports.cacheStore) {
            throw new Error("'" + ns + "' in edataStore already initialized!");
        }
        else {
            return exports.cacheStore[ns] = edata_1.default(initData, edataOptions);
        }
    }
    exports.initStore = initStore;
    /**
     * Get store using namespace from cacheStore
     * @param namespace {string} The namespace of cacheStore, empty for 'default'
     * @returns {edataRoot} The edata root instance
     */
    function getStore(namespace) {
        var ns = nomalizeNamespace(namespace);
        if (ns in exports.cacheStore) {
            return exports.cacheStore[ns];
        }
        else {
            throw new Error("cannot find '" + ns + "' in edataStore, please call \"initStore('" + ns + "')\" first!");
        }
    }
    exports.getStore = getStore;
    function nomalizeNamespace(namespace) {
        return namespace == null ? 'default' : String(namespace);
    }
});
