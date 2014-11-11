'use strict';

const cofse     = require('../lib/cofse');
const co        = require('co');
const path      = require('path');
const VError    = require('verror');
const sprintf   = require('extsprintf').sprintf;
const chai      = require('chai');
const expect    = chai.expect;

describe('fs methods', function() {
	it('should work', function(done) {
		co(function *() {
			try {
				var content = yield cofse.readFile(
					path.join(__dirname, './fixtures/test'),
					{
						encoding: 'utf-8'
					}
				);
				expect(content).to.equal('hello');
			}
			catch (error) {
				throw new VError(error, 'cofse.readFile error');
			}
		})(function(error) {
			if (error) {
				done(new Error(sprintf('%r', error)));
			}
			else {
				done();
			}
		});
	});
});

describe('fse methods', function() {
	it('should be wrapped', function(done) {
		co(function *() {
			try {
				var testDir = path.join(__dirname, './fixtures/a/b/c');
				yield cofse.mkdirs(testDir);
				var exists = yield cofse.exists(testDir);
				expect(exists).to.equal(true);
			}
			catch (error) {
				throw new VError(error, 'cofse.exists error');
			}
		})(function(error) {
			if (error) {
				done(new Error(sprintf('%r', error)));
			}
			else {
				done();
			}
		});
	});
});

