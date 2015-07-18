
var gulp = require('gulp'),
	_ = require('lodash'),
	fs = require('fs');

function sortObject(obj) {
	var keys = Object.keys(obj);
	var len = keys.length;
	var i;
	var copy = {};
	keys.sort();

	for (i = 0; i < len; i++) {
		copy[keys[i]] = obj[keys[i]];
	}

	return copy;
}

module.exports = function(options) {
	gulp.task('i18n', function(cb) {
		var en = require('../src/i18n/en.json');
		var zh = require('../src/i18n/zh.json');

		_.difference(Object.keys(en), Object.keys(zh)).forEach(function(key) {
			zh[key] = '';
		});

		_.difference(Object.keys(zh), Object.keys(en)).forEach(function(key) {
			delete zh[key];
		});

		en = sortObject(en);
		zh = sortObject(zh);

		fs.writeFileSync('src/i18n/en.json', JSON.stringify(en, null, '\t'));
		fs.writeFileSync('src/i18n/zh.json', JSON.stringify(zh, null, '\t'));
	});
};

