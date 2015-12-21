var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./app"
    });

    // Watch files
    gulp.watch("./app/scss/*.scss", ['styles']);
    gulp.watch("./app/*.html").on('change', browserSync.reload);
    gulp.watch("./app/templates/*/*.html").on('change', browserSync.reload);
    gulp.watch("./app/css/*.css").on('change', browserSync.reload);
    gulp.watch("app/js/*/*.js").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'livereload', 'styles', 'serve'], function() {

});

// Sass Task
gulp.task('styles', function() {
  return sass('app/scss', { style: 'expanded' })
    .pipe(gulp.dest('app/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());

});
