var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Minify compiled CSS
gulp.task('minify-css', function() {
    return gulp.src('src/css/print.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('src/js/perfmatters.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['minify-css', 'minify-js']);
