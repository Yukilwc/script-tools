/*
 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-25 16:42:46
 * @Description: file content
 * @FilePath: \danyou\gulpfile.js
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var watcher = require('gulp-watch')
var changed = require('gulp-changed');
const concat = require('gulp-concat');
const template = require('gulp-template')
gulp.task('default', gulp.series(minFunc))
// https://www.npmjs.com/package/gulp-fontmin
function minFunc() {
    console.log('==========最小化字体',)
    return gulp.src('')
        .pipe()
        .pipe(gulp.dest('./dist'))
}