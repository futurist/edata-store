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

1. Initialize store using `initStore` (normally at your entry file)

```js
import {initStore} from 'edata-store'
initStore() // `'default'` namespace
// OR
initStore(`xx_space`)
```

2. call `getStore()`, and you get an [edata](https://www.npmjs.com/package/edata) instance. (normally at your component file)

```js
// any where in your source
import {getStore} from 'edata-store'
getStore().set('xx', 1)  // `'default'` namespace
getStore().get('xx').toJSON() // 1
```

Or pass the `namespace` arg:
```js
getStore('xx_space').set('xx', 2)  // `'xx_space'` namespace
getStore('xx_space').get('xx').toJSON() // 2
```

Above create a separate `edata` under `xx_space` namespace.

### API

The typescript definition as below:

```typescript
/**
 * Initialize store for namespace, after that you can call getStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @param initData {any} The edata initData
 * @param edataOptions {IOptions} The edata Initialize IOptions
 * @returns {edataRoot} The edata root instance
 */
export declare function initStore(namespace?: string, initData?: any, edataOptions?: Partial<IOptions>): edataRoot;
/**
 * Get store using namespace from cacheStore
 * @param namespace {string} The namespace of cacheStore, empty for 'default'
 * @returns {edataRoot} The edata root instance
 */
export declare function getStore(namespace?: string): edataRoot;
```

