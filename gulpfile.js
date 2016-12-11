var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var jshint = require('gulp-jshint');
var htmlmin = require('gulp-htmlmin');
var del = require('del');

gulp.task('default', function() {
  console.log("hello gulp ~!")
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('script/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('lint', function() {
  return gulp.src('script/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('minify', function() {
  return gulp.src('html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del(['dist']);
});


gulp.task('run-all-task',["default","clean","compress","lint","minify"]);