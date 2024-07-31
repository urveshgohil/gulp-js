"use strict";
import gulp from 'gulp';
import dartsass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartsass);

const sassTask = () => {
    return gulp.src(['scss/*.scss','scss/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
};

const javascriptTask = () => {
    return gulp.src(['js/*.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
};

const watchTask = () => {
    return gulp.watch(['scss/*.scss','scss/**/*.scss','js/*.js'], (done) => {
        gulp.series(['sass','javascript']) (done)
    })
};

gulp.task('sass', sassTask);
gulp.task('javascript', javascriptTask);
gulp.task('watch', watchTask);
gulp.task('default', gulp.series('sass', 'javascript', 'watch'));