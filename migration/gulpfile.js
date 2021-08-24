/*
 * @Author: 李文超
 * @Date: 2020-10-15 17:39:13
 * @LastEditors: 李文超
 * @LastEditTime: 2021-08-24 19:52:21
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
const clean = require('gulp-clean');
const
    {
        indexName,
        mpFolderPath,
        mpBackupFolderPath
    } = require('./src/index')
// 自动监听
// gulp.task('default', gulp.series(function () {
//     replaceColor()
// }))
// 从小程序工程，备份首页到备份文件夹，备份目标为配置的indexName
// 从备份项目，导入指定首页到小程序，导入目标为配置的indexName

function mp2Backup() {
    // 清空目标文件夹
    function handleClean() {
        return gulp.src([`${mpBackupFolderPath}/pages/${indexName}`, `${mpBackupFolderPath}/images/${indexName}`], { read: false, allowEmpty: true, })
            .pipe(rename((path) => {
                console.log('==========rename path', path)
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
                console.log('==========rename path', path)
            }))
            .pipe(
                gulp.dest(`${mpBackupFolderPath}/pages/${indexName}/`)
            )
    }
    // 迁移图片
    function handleImage() {
        return gulp.src([`${mpFolderPath}/images/${indexName}/*`])
            .pipe(rename((path) => {
                console.log('==========rename path', path)
            }))
            .pipe(
                gulp.dest(`${mpBackupFolderPath}/images/${indexName}/`)
            )
    }
    return gulp.series([handleClean,gulp.parallel([handleFile,handleImage])])
}
gulp.task('backup2Mp', () => { })
gulp.task('mp2Backup', mp2Backup())
