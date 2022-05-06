/*
 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-07-13 14:24:14
 * @Description: file content
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
    const { cn, en, dictionary } = require('./lang/dictionary.js')
    let translations = {
        "en-US": en,
        "zh-CN": cn
    }
    // console.log('==========', dictionary)
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
gulp.task('insert-wxs', insertWxsScript)
function insertWxsScript() {
    // return gulp.src('./pages/**/*.wxml')
    console.log('========== insertWxsScript',)
    return gulp.src('./pages/**/*.wxml').pipe(
        mapStream(function (file, cb) {
            let fileContents = file.contents.toString()
            let filePathList = file.path.split('\\')
            let pageIndex = 0
            let len = filePathList.length
            filePathList.find((item, index) => {
                if (item === 'pages') {
                    pageIndex = index
                    return true
                }
                else {
                    return false
                }
            })
            // console.log('==========file.path', file.path, filePathList, pageIndex, len)
            let relativeCount = len - 1 - pageIndex
            if (fileContents.indexOf("module=\"i18n\"") !== -1) {
                console.log('==========已经引入wxs模块',)
                cb(null, file)
            }
            else {
                // console.log('==========file', file)
                let relativePath = 'lang/locales.wxs'
                for (let i = 0; i < relativeCount; i++) {
                    relativePath = '../' + relativePath
                }
                console.log('==========relativePath', relativePath)
                fileContents = `<wxs src=\"${relativePath}\" module=\"i18n\" />\n` + fileContents
                file.contents = new Buffer(fileContents)
                cb(null, file)
            }
        })
    )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        }))
        .pipe(
            gulp.dest('./pages')
        )
}

gulp.task('replace-lang', replaceLang)
function replaceLang() {
    let pathParams = null
    process.argv.find((item, index) => {
        if (item === '--path') {
            pathParams = process.argv[index + 1]
            return true
        }
    })
    console.log('==========replaceLang', pathParams)
    const { getKeyByCh } = require('./lang/dictionary')
    return gulp.src(pathParams).pipe(
        mapStream(function (file, cb) {
            let fileContents = file.contents.toString()
            let resContents = fileContents.replace(/[\u4e00-\u9fa5]+/g, (match) => {
                let matchRes = getKeyByCh(match)
                console.log('==========匹配项', match, '翻译项', matchRes)
                if (match === matchRes || !matchRes) {
                    return match
                }
                else {
                    return `{{i18n.t("${matchRes}",$_locale)}}`
                }
            })
            file.contents = new Buffer(resContents)
            cb(null, file)
        })
    )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        }))
        .pipe(
            gulp.dest(pathParams.split('**')[0])
        )
}

gulp.task('show-nav-title', showNavTitle)
function showNavTitle() {
    return gulp.src('./pages/**/*.json').pipe(
        mapStream(function (file, cb) {
            let fileContents = file.contents.toString()
            // let obj = JSON.parse(fileContents)
            // delete obj.navigationBarTitleText
            // console.log('==========fileContents:  ',obj)
            // let str = fileContents.replace(/"navigationBarTitleText": ".+"/,'')
            // file.contents = new Buffer(str)
            // cb(null, file)
        })
    )
        .pipe(rename((path) => {
            // console.log('==========rename path', path)
        }))
        .pipe(
            // gulp.dest('./pages')
        )
}