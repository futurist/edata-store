# edata-store

Easily use global store with [edata](https://www.npmjs.com/package/edata).

[![Build Status](https://travis-ci.org/futurist/edata-store.svg?branch=master)](https://travis-ci.org/futurist/edata-store)
[![NPM Version](https://img.shields.io/npm/v/edata-store.svg)](https://www.npmjs.com/package/edata-store)

### Install

You can install from [NPM](https://www.npmjs.com/package/edata-store).

```sh
npm install --save edata-store
```

### Usage

simply `getStore()`, and you got an [edata](https://www.npmjs.com/package/edata) instance.

```js
// any where in your source
import {getStore} from 'edata-store'
getStore().set('xx', 1)
getStore().get('xx').toJSON() // 1
```

Or pass the `namespace` arg:
```js
getStore('xx_space').set('xx', 2)
getStore('xx_space').get('xx').toJSON() // 2
```

Above create a separate `edata` under `xx_space` namespace.

### API

The typescript definition as below:

```typescript

/**
 * Get store from seperate namespace
 * @param namespace {string} The namespace of global cache store, fallback to ''
 * @param initStore {Function} init function for first init namespace
 * @param cache {Object} The global cache store
 * @returns {edataRoot} The edata root instance
 */
export declare function getStore(namespace: string, initStore?: (e: any) => edataRoot, cache?: any): edataRoot;


/**
 * Get 2 levels store from global cache store
 * @param namespace1 {string} The level1 namespace of global cache store, namespace2 is level1, fallback to ''
 * @param cache {Object} The global cache store
 * @returns {Function} (namespace2: string, initStore = (e => edata({}))) => edataRoot
 */
export declare function getStore2(namespace1: string, cache?: any): (namespace2: string, initStore?: (e: any) => edataRoot) => edataRoot;

```

