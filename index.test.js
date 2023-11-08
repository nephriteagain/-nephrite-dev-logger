import DevLogger from './index.js'

import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('DevLogger testing', (t) => {
    it('create a new instance of the DevLogger class', () => {
        const dev = new DevLogger(true)
        assert.ok(dev instanceof DevLogger)
    })
    it ('matches the log value', () => {
        const dev = new DevLogger(true)
        const [log] = dev.log('this is a test')
        assert.strictEqual(log, 'this is a test')
    })
    it ('logs nothing', () => {
        const dev = new DevLogger(false)
        const [log] = dev.log('nothing')
        assert.strictEqual(log, undefined)
    })
    it ('logs only the dev message', () => {
        const dev = new DevLogger(true)
        const [ d, p ] = dev.log('dev log', 'prod log')
        assert.strictEqual(d, 'dev log')
        assert.strictEqual(p, undefined)
    })
    it ('logs only the prod message', () => {
        const dev = new DevLogger(false)
        const [ p ] = dev.log('dev log', 'prod log')
        assert.strictEqual(p, 'prod log')
    })
    it ('logs both message in dev mode', () => {
        const dev = new DevLogger(true)
        const [ d, p ] = dev.log('dev log', 'prod log', true)
        assert.strictEqual(d, 'dev log')
        assert.strictEqual(p, 'prod log')
    })
    it ('logs both message in prod mode', () => {
        const dev = new DevLogger(false)
        const [ d, p ] = dev.log('dev log', 'prod log', true)
        assert.strictEqual(d, 'dev log')
        assert.strictEqual(p, 'prod log')
    })

})