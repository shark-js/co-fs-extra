const cofs      = require('co-fs');
const fse       = require('fs-extra');
const thunkify  = require('thunkify');
const extend    = require('node.extend');

module.exports = extend({}, cofs, [
	'copy',
	'ensureFile',
	'ensureDir',
	'mkdirs',
	'move',
	'outputFile',
	'outputJson',
	'readJson',
	'remove',
	'writeJson'
].reduce(function(obj, method) {
	obj[method] = thunkify(fse[method]);
	return obj;
}, {}));
