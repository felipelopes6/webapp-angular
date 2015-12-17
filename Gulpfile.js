var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');


gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
});

gulp.task('default', ['express', 'watch', 'livereload', 'styles'], function() {

});

// Sass Task
gulp.task('styles', function() {
  return sass('scss', { style: 'expanded' })
    .pipe(gulp.dest('app/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/css'));
});

// Gulp Watch Task
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['styles']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('./app/css/*.css', notifyLiveReload);
});

// Live Reload Task
var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}