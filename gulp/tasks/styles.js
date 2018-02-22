var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});