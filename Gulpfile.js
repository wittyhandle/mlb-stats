'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
	var called = false;
	return nodemon({
	  script: 'app.js'
	}).on('start', function() {
		if (!called) {
      		called = true;
      		cb();
  		}
	});
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    files: ['public/**/*.*'],
    baseDir: './',
    debugInfo: false
  });
});

gulp.task('default', ['browser-sync'], function () {
});