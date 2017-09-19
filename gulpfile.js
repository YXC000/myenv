var gulp = require('gulp');//表示引进gulp模块
// var less = require('gulp-less');
var bower = require('gulp-bower');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});

// gulp.task('easy_less', function () {    
//     return gulp.src('app/styles/*.less')    
//     .pipe(less())
//     .pipe(gulp.dest('./public/styles/'));
// });
gulp.task('bower', function() {
    return bower('./bower_components')
        .pipe(gulp.dest('./static/lib/'));
});

gulp.task('easy_webpack',function(){
    gulp.src('./app/main.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./public/'));
});

gulp.task("easy_build",["easy_webpack","easy_less"], function () {
    // 简单编译运行
});