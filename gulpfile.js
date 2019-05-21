const gulp = require('gulp')
const babel = require('gulp-babel')
const htmlMin = require('gulp-htmlmin')
const imageMin = require('gulp-imagemin')
const stylus = require('gulp-stylus')

gulp.task('img', function() {
  return gulp
    .src('src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('docs/img'))
})

gulp.task('html', function() {
  return gulp
    .src('src/**/*.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest('docs'))
})

gulp.task('js', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(
      babel({
        comments: false,
        minified: true
      })
    )
    .pipe(gulp.dest('docs/js'))
})

gulp.task('css', function() {
  return gulp
    .src('src/styl/style.styl')
    .pipe(
      stylus({
        compress: true
      })
    )
    .pipe(gulp.dest('docs/css'))
})

gulp.task('watch', function() {
  gulp.watch('src/styl/*.styl', gulp.series('css'))
  gulp.watch('src/*.html', gulp.series('html'))
  gulp.watch('src/js/*.js', gulp.series('js'))
})
