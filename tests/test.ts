import * as assert from 'assert'
import pluginActions from 'edata/plugins/actions'
import {cacheStore, getStore, initStore} from '../src/index'

// default
initStore()
assert.ok(cacheStore.default)
assert.deepEqual(getStore().unwrap(), {})

// namespace
initStore('xx', {yy: 10})
getStore('xx').set('zz', {xx: 1})
assert.deepEqual(cacheStore.xx.unwrap(), {yy:10, zz: {xx: 1}})

// should throw if not inited
assert.throws(()=>getStore('xx.yy'))
assert.ok(initStore('xx.yy', {ok: 1}, {plugins: [pluginActions]}))
assert.ok(getStore('xx.yy').dispatch)
