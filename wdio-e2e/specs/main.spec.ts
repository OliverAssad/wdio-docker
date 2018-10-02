import { expect, assert } from "chai";
import * as webdriverio from "webdriverio";
import * as mocha from "mocha";

const protocol = "http"
const host = process.env.APP_HOST || "localhost";
const port = "3000";
const toolUrl = `${protocol}://${host}:${port}`;


describe('local docker test', function () {
   
    it('page should be loaded', function () {
        browser.url('http://frontend')
        let title = $('body > app-root > h1')
        assert.isTrue(title.getText().includes('wdio-frontend'))
    })
});