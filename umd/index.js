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
     * Init store for namespace, after that you can call getStore
     * @param namespace {string} The namespace of cacheStore, empty for 'default'
     * @param initData {any} The edata initData
     * @param edataConfig {IOptions} The edata init iOptions
     * @returns {edataRoot} The edata root instance
     */
    function initStore(namespace, initData, edataConfig) {
        if (namespace === void 0) { namespace = 'default'; }
        if (initData === void 0) { initData = {}; }
        return exports.cacheStore[namespace] = edata_1.default(initData, edataConfig);
    }
    exports.initStore = initStore;
    /**
     * Get store using namespace from cacheStore
     * @param namespace {string} The namespace of cacheStore, empty for 'default'
     * @returns {edataRoot} The edata root instance
     */
    function getStore(namespace) {
        if (namespace === void 0) { namespace = 'default'; }
        if (namespace in exports.cacheStore) {
            return exports.cacheStore[namespace];
        }
        else {
            throw new Error("cannot find '" + namespace + "' in edataStore, please call \"initStore('" + namespace + "')\" first!");
        }
    }
    exports.getStore = getStore;
});
