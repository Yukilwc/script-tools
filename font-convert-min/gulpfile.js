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
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var watcher = require('gulp-watch')
var changed = require('gulp-changed');
const concat = require('gulp-concat');
const template = require('gulp-template');
const srcName = 'PingFang.ttf'
gulp.task('default', minFunc)
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    // var knownOptions = {
    //     string: 'env',
    //     default: { env: process.env.NODE_ENV || 'production' }
    // };

    var options = minimist(process.argv.slice(2));
    console.log('==========options', process.argv, options)

}
// https://www.npmjs.com/package/gulp-fontmin
function minFunc() {
    console.log('==========最小化字体',)
    let argOptions = getArgOptions()
    console.log('==========',)
    return gulp.src(`./src/fonts/${srcName}`)
        .pipe(rename((path) => {
            console.log('==========path', path)
            path.basename += '-min'
        }))
        .pipe(gulp.dest('./dist/'))
}