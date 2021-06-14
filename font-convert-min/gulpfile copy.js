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
// 自动监听
gulp.task('default', gulp.series(function () {
    watcher('./pages/**/*.scss', function () {
        miniSassPages()
    })
    watcher('./components/**/*.scss', function () {
        miniSassComponents()
    })
    watcher('./lang/dictionary.js', () => {
        console.log('==========watch i18n change',)
        generateLocalWxs()
    })

}))
// 手动编译
gulp.task('sass', gulp.parallel(miniSassPages, miniSassComponents))
// 编译过程
function miniSassPages() {
    return gulp.src('./pages/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(changed('./pages'))
        .pipe(gulp.dest('./pages'))
        .pipe(rename((path) => {
            console.log('scss file has compiled to wxss:' + 'pages\\' + path.dirname + '\\' + path.basename + '.wxss')
        }))
}
function miniSassComponents() {
    return gulp.src('./components/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(changed('./components'))
        .pipe(gulp.dest('./components'))
        .pipe(rename((path) => {
            console.log('scss file has compiled to wxss:' + 'components\\' + path.dirname + '\\' + path.basename + '.wxss')
        }))
}
// 根据语言包，自动生成wxs
function generateLocalWxs() {
    delete require.cache[require.resolve('./lang/dictionary.js')]
    const { cn, en,dictionary} = require('./lang/dictionary.js')
    let translations = {
        "en-US": en,
        "zh-CN": cn 
    }
    console.log('==========',dictionary)
    return gulp.src('./lang/template')
        .pipe(template({ data: JSON.stringify(translations) }))
        .pipe(rename((path) => {
            console.log('==========path rename', path)
            path.basename = 'locales'
            path.extname = '.wxs'
        }))
        .pipe(
            gulp.dest('./lang')
        )
}