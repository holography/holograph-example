var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('holograph', shell.task('node_modules/.bin/holograph'))
