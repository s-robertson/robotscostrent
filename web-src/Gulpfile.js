'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var url = 'localhost:8000';
var basepath = '../';

gulp.task('sass', function () {
  return gulp.src(['./sass/*.scss', './sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../web/dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    proxy: 'localhost:8000'
  });

  gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
  gulp.watch('../app/Resources/**/*.html.twig').on('change', browserSync.reload);
});

gulp.task('build', ['sass']);

gulp.task('default', ['build']);
