'use strict';

const cofs      = require('co-fs');
const fse       = require('fs-extra');
const thunkify  = require('thunkify');
const extend    = require('node.extend');

module.exports = extend(
	{},
	Object.keys(fse).reduce(function(obj, method) {
		if (typeof obj[method] === 'undefined' && typeof fse[method] === 'function') {
			obj[method] = thunkify(fse[method]);
		}
		return obj;
	}, {}),
	cofs
);