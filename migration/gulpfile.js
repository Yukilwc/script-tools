/*
 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-08-24 20:49:32
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
const prettier = require('gulp-prettier');
const clean = require('gulp-clean');
const
    {
        mpFolderPath,
        mpBackupFolderPath
    } = require('./src/index')
const { DateTime } = require('./src/DateTime')
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
let logInfo = {

}
function loggerTask() {
    console.log('========== loggerTask',)
    let originLog = require('./src/log.json')
    if (!originLog) originLog = []
    return gulp.src(['./src/log.json'])
        .pipe
        (
            mapStream((file, cb) => {
                let fileContents = file.contents.toString()
                logInfo.date = DateTime.formatToStr(new Date())
                originLog.unshift(logInfo)
                let logContents = JSON.stringify(originLog)
                fileContents = `\n${logContents}\n`
                file.contents = new Buffer(fileContents)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        }))
        .pipe(prettier({singleQuote: true}))
        .pipe(
            gulp.dest('./src/')
        )
}

// 自动监听
// gulp.task('default', gulp.series(function () {
//     replaceColor()
// }))

// 从小程序工程，备份首页到备份文件夹，备份目标为配置的indexName
function mp2Backup() {
    let argOptions = getArgOptions()
    console.log('==========argOptions ', argOptions)
    if (!argOptions.name) throw new Error('参数错误')
    const indexName = argOptions.name
    logInfo.type="mp2Backup"
    logInfo.indexName = indexName
    logInfo.mpFolderPath = mpFolderPath
    logInfo.mpBackupFolderPath = mpBackupFolderPath
    // 清空目标文件夹
    function handleClean() {
        const srcList = [`${mpBackupFolderPath}/pages/${indexName}`,
        `${mpBackupFolderPath}/images/${indexName}`]
        return gulp.src(srcList, { read: false, allowEmpty: true, })
            .pipe(rename((path) => {
                // console.log('==========rename path', path)
                if (logInfo.cleanLog) {
                    logInfo.cleanLog.push(path)
                }
                else {
                    logInfo.cleanLog = []
                    logInfo.cleanLog.push(path)
                }
            }))
            .pipe(clean(
                {
                    force: true
                }
            ))
    }
    // 迁移文件
    function handleFile() {
        return gulp.src([`${mpFolderPath}/pages/index/*`])
            .pipe(rename((path) => {
                // console.log('==========rename path', path)
                if (logInfo.fileLog) {
                    logInfo.fileLog.push(path)
                }
                else {
                    logInfo.fileLog = []
                    logInfo.fileLog.push(path)
                }

            }))
            .pipe(
                gulp.dest(`${mpBackupFolderPath}/pages/${indexName}/`)
            )
    }
    // 迁移图片
    function handleImage() {
        return gulp.src([`${mpFolderPath}/images/${indexName}/*`])
            .pipe(rename((path) => {
                // console.log('==========rename path', path)
                if (logInfo.imageLog) {
                    logInfo.imageLog.push(path)
                }
                else {
                    logInfo.imageLog = []
                    logInfo.imageLog.push(path)
                }

            }))
            .pipe(
                gulp.dest(`${mpBackupFolderPath}/images/${indexName}/`)
            )
    }
    return gulp.series([handleClean, gulp.parallel([handleFile, handleImage]), loggerTask])
}
// 从备份项目，导入指定首页到小程序，导入目标为配置的indexName
function backup2Mp() {
    let argOptions = getArgOptions()
    console.log('==========argOptions ', argOptions)
    if (!argOptions.name) throw new Error('参数错误')
    const indexName = argOptions.name
    logInfo.indexName = indexName
    logInfo.mpFolderPath = mpFolderPath
    logInfo.mpBackupFolderPath = mpBackupFolderPath
    logInfo.type="backup2Mp"
    // 清空目标文件夹
    function handleClean() {
        const fs = require("fs");
        let files = fs.readdirSync(`${mpFolderPath}/images`) || []
        files = files.filter(item => /index.*/.test(item))
        files = files.filter(item => item.indexOf('.') === -1)
        console.log('==========files', files)
        const srcList = [`${mpFolderPath}/pages/index`, `${mpFolderPath}/images/${indexName}`]
        files.forEach(name => {
            srcList.push(`${mpFolderPath}/images/${name}`)
        })
        return gulp.src(srcList, { read: false, allowEmpty: true, })
            .pipe(rename((path) => {
                console.log('==========rename path', path)
                if (logInfo.cleanLog) {
                    logInfo.cleanLog.push(path)
                }
                else {
                    logInfo.cleanLog = []
                    logInfo.cleanLog.push(path)
                }

            }))
            .pipe(clean(
                {
                    force: true
                }
            ))
    }
    // 迁移文件
    function handleFile() {
        return gulp.src([`${mpBackupFolderPath}/pages/${indexName}/*`])
            .pipe(rename((path) => {
                console.log('==========rename path', path)
                if (logInfo.fileLog) {
                    logInfo.fileLog.push(path)
                }
                else {
                    logInfo.fileLog = []
                    logInfo.fileLog.push(path)
                }


            }))
            .pipe(
                gulp.dest(`${mpFolderPath}/pages/index/`)
            )
    }
    // 迁移图片
    function handleImage() {
        return gulp.src([`${mpBackupFolderPath}/images/${indexName}/*`])
            .pipe(rename((path) => {
                console.log('==========rename path', path)
                if (logInfo.imageLog) {
                    logInfo.imageLog.push(path)
                }
                else {
                    logInfo.imageLog = []
                    logInfo.imageLog.push(path)
                }


            }))
            .pipe(
                gulp.dest(`${mpFolderPath}/images/${indexName}/`)
            )
    }
    return gulp.series([handleClean, gulp.parallel([handleFile, handleImage]), loggerTask])
}
gulp.task('backup2Mp', backup2Mp())
gulp.task('mp2Backup', mp2Backup())
