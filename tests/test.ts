import * as assert from 'assert'
import {storeConfig, getStore, getStore2} from '../src/index'

const defaultCache = storeConfig.cache

getStore2('xx')('aa').set('xx', 1)
getStore2('xx')('aa').set('yy', 2)
getStore2('yy')('bb')
getStore('ii').set('oioi', {xx: 1})

assert.deepEqual(defaultCache.xx.aa.unwrap(), {xx:1, yy:2})
assert.deepEqual(defaultCache.yy.bb.unwrap(), {})
assert.deepEqual(defaultCache[''].ii.unwrap(), {oioi: {xx: 1}})
