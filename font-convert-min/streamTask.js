/*
 * @Author: 李文超
 * @Date: 2021-06-23 10:08:05
 * @LastEditors: 李文超
 * @LastEditTime: 2021-06-23 13:24:16
 * @Description: file content
 * @FilePath: \font-convert-min\streamTask.js
 */
require('util').inspect.defaultOptions.depth = null
var gulp = require('gulp');
var rename = require('gulp-rename')
var changed = require('gulp-changed');
var fontmin = require('gulp-fontmin-woff2')
var font2css = require('gulp-font2css-display').default;
const { DEFAULT_MIN_VERSION } = require('tls');
const path = require('path')

// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const streamTask = (cb) => {
    console.log('=========start steam task',)
    const buffers = []
    // D:\workspace\project\web\danyou-web-ssr
    const basePath = 'D:/workspace/project/web/danyou-web-ssr'
    gulp.src([
        `${basePath}/pages/**/*.vue`,
        `${basePath}/pages/**/*.js`,
        `${basePath}/pages/**/*.json`,
        `${basePath}/components/**/*.vue`,
        `${basePath}/components/**/*.js`,
        `${basePath}/components/**/*.json`,
        `${basePath}/layouts/**/*.vue`,
        `${basePath}/i18n/**/*.js`,
    ])
        .on('data', function (file) {
            buffers.push(file.contents)
        })
        .on('end', function () {
            let text = Buffer.concat(buffers).toString('utf-8')
            text = [...new Set(text)].join('')
            text = filterCn(text)
            getMin(text, cb)
        })

}
const getMin = (text, cb) => {
    console.log('==========text', text)
    console.log('==========text length', text.length)
    let argOptions = getArgOptions()
    gulp.src(`./src/fonts/${argOptions.font}`)
        .pipe(fontmin({
            text: text,
        }))
        .pipe(rename((path) => {
            path.basename += '-stream-min'
        }))
        .pipe(gulp.dest('./dist/stream-min/'))
        .on('end', function () {
            generateBase64(cb)
        })
}
const generateBase64 = (cb) => {
    gulp.src(`./dist/stream-min/*.ttf`)
        .pipe(font2css())
        .pipe(rename(path => {
            path.basename += '-base64'
        }))
        .pipe(gulp.dest('./dist/stream-min/'))
        .on('end', function () {
            cb()
        })
}
const filterCn = (text) => {
    return text.replace(/[^\u4E00-\u9FA5]/g, '')
}
module.exports = {
    streamTask
}