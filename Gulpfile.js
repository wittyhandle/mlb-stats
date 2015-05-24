'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var nodemon = require('gulp-nodemon');

var sass = require('gulp-sass');

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
    baseDir: './',
    debugInfo: false
  });

  gulp.watch("public/sass/*.scss", ['sass']);
  gulp.watch("routes/**/*.js").on('change', reload);
  gulp.watch("public/**/*.js").on('change', reload);
  gulp.watch("public/**/*.html").on('change', reload);

});

gulp.task('sass', function() {
	gulp.src('public/sass/*.scss')
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(gulp.dest('public/css/'))
	.pipe(browserSync.stream());
});


gulp.task('default', ['browser-sync'], function () {
});