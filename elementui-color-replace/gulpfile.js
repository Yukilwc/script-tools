/*
 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-07-26 18:36:25
 * @Description: file content
 * @FilePath: \script-tools\elementui-color-replace\gulpfile.js
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var watcher = require('gulp-watch')
var changed = require('gulp-changed');
const concat = require('gulp-concat');
const template = require('gulp-template')
const mapStream = require('map-stream');
const { matcher } = require('micromatch');
const { listenerCount } = require('gulp');
// 自动监听
gulp.task('default', gulp.series(function () {
    replaceColor()
}))
gulp.task('replace-color', replaceColor)
function replaceColor() {
    let { source } = require('./src/source')
    return gulp.src('./src/index.css').pipe(
        mapStream(function (file, cb) {
            let fileContents = file.contents.toString()
            source.forEach(item => {
                let reg = new RegExp(item.value, 'gi')
                fileContents = fileContents.replace(reg, `var(${item.name})`
                )
            })
            file.contents = new Buffer(fileContents)
            cb(null, file)
        })
    )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        }))
        .pipe(
            gulp.dest('./dist/index.css')
        )
}
