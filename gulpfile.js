var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');


gulp.task('sass', function () {
    return gulp.src('src/assets/sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('copyIndex', function () {
    return gulp.src('src/public/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
    browserSync.init({
        server: "./dist"
    });
});

gulp.task('concatJS', function () {
    return gulp.src('./src/assets/js/components/*.js')
        .pipe(concat('output.min.js'))
        .pipe(gulp.dest('./src/assets/js/'));
});

gulp.task('uglify', function (cb) {
    pump([
        gulp.src ('src/assets/js/output.min.js'),
        uglify(),
        gulp.dest ('./dist/js/')

    ],cb
  );
});

gulp.task('copyImg', function () {
    return gulp.src('src/assets/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('copyFonts', function () {
    return gulp.src('src/assets/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyLibs', function () {
    return gulp.src('src/assets/libs/*.*')
        .pipe(gulp.dest('./dist/libs'));
});

gulp.task('watch', function () {
    gulp.watch('src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('src/public/*.html', ['copyIndex']);
    gulp.watch('src/assets/js/components/*.js', ['concatJS']);
    gulp.watch('src/assets/js/output.js', ['uglify']);
    gulp.watch('src/assets/img/**/*.*', ['copyImg']);
    gulp.watch('src/assets/fonts/**/*.*', ['copyFonts']);
    gulp.watch('src/assets/libs/**/*.*', ['copyLibs']);

    gulp.watch('dist/**/*.*').on('change', browserSync.reload);

});
gulp.task('default', ['copyIndex','copyImg','copyLibs','copyFonts','concatJS','sass','server','watch']);