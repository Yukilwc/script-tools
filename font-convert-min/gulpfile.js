/*

 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-25 16:42:46
 * @Description: file content
 * @FilePath: \danyou\gulpfile.js
 */
require('util').inspect.defaultOptions.depth = null
var gulp = require('gulp');
// var sass = require('gulp-sass');
var rename = require('gulp-rename')
// var watcher = require('gulp-watch')
var changed = require('gulp-changed');
// const concat = require('gulp-concat');
// const template = require('gulp-template');
var fontmin = require('gulp-fontmin-woff2')
var font2css = require('gulp-font2css-display').default
gulp.task('min', gulp.series([minFunc, generateBase64]))
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
// https://www.npmjs.com/package/gulp-fontmin
function minFunc() {
    console.log('==========最小化字体',)
    let text = require('./src/text.js')
    let argOptions = getArgOptions()
    return gulp.src(`./src/fonts/${argOptions.font}`)
        .pipe(fontmin({
            text: text,
            // onlyChinese: false   
        }))
        .pipe(rename((path) => {
            console.log('==========path', path)
            path.basename += '-min'
        }))
        .pipe(gulp.dest('./dist/'))
}
function generateBase64() {
    return gulp.src(`./dist/*.ttf`)
        .pipe(font2css())
        .pipe(rename(path => {
            path.basename += '-base64'
        }))
        .pipe(gulp.dest('./dist/'))
}

gulp.task("cn", gulp.series([generateCn]))
function generateCn() {
    let { getCn } = require('./tools.js')
    let text = getCn()
    let argOptions = getArgOptions()
    return gulp.src(`./src/fonts/${argOptions.font}`)
        .pipe(fontmin({
            text: text,
            // onlyChinese: false   
        }))
        .pipe(rename((path) => {
            console.log('==========path', path)
            path.basename += '-only-chinese'
        }))
        .pipe(gulp.dest('./dist/cn/'))

}
gulp.task("convert", gulp.series([doConvert]))
function doConvert() {
    let argOptions = getArgOptions()
    return gulp.src(`./src/fonts/${argOptions.font}`)
        .pipe(fontmin({
            text: '',
        }))
        .pipe(rename((path) => {
            console.log('==========path', path)
        }))
        .pipe(gulp.dest('./dist/convert/'))

}