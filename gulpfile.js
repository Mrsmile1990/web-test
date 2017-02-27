/**
 * Created by Administrator on 2017/2/27 0027.
 */
'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copy',function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);
});

gulp.task('style',function(){
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'));
});
