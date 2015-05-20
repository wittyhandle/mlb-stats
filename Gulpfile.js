'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		files: ["public/**/*.*"],
		baseDir: "./",
		debugInfo: false
	});
});

gulp.task('nodemon', function (cb) {
	return nodemon({
	  script: 'app.js'
	}).on('start', function () {
      cb();
  });
});