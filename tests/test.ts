import * as assert from 'assert'
import pluginActions from 'edata/plugins/actions'
import {cacheStore, getStore, initStore} from '../src/index'

initStore('ii', {yy: 10})
getStore('ii').set('oioi', {xx: 1})
assert.deepEqual(cacheStore.ii.unwrap(), {yy:10, oioi: {xx: 1}})

assert.throws(()=>getStore('xx.yy'))
assert.ok(initStore('xx.yy', {ok: 1}, {plugins: [pluginActions]}))
assert.ok(getStore('xx.yy').dispatch)
