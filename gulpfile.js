var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat');



gulp.task('buildStyles', function() {

    return gulp.src('src/scss/to-prod/*.scss')
        .pipe(sass({
            'sourcemap=none': true,
             errLogToConsole: true
        })).on('error', notify.onError({
            title: "mistake: ",
            message: "<%= error.message %>"
        }))
        .pipe(gulp.dest('prod/css/'));
});

gulp.task('html', function() {

    return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('prod/html/'));

});
gulp.task('js', function() {

    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('prod/js'));

});

gulp.task('watch', function() {
    gulp.watch('src/scss/to-prod/*.scss', ['buildStyles']);
    gulp.watch('src/html/**/*.html', ['html']);
    gulp.watch('src/js/**/*.js', ['js']);
});