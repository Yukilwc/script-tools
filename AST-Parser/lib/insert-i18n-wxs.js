import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import path from 'path'
import {
    globFilter,
    globListFilter
} from '../tools/index'
import { currentPath, targetPath, commonExt } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}

const insertWxs = () => {
    console.log('==========insertWxs',)
    let wxsFilePath = path.resolve("D:\\workspace\\work\\minapp\\etransmp3\\", "./lang/locales.wxs")
    let srcPath = globFilter(path.resolve(targetPath, "./**/*.wxml"))
    let destPath = globFilter(path.resolve(targetPath, "./"))
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    console.log('==========wxsFilePath', wxsFilePath)
    return src([srcPath, ...commonExt], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                let relativePath = globFilter(path.relative(path.dirname(file.path), wxsFilePath))
                console.log('==========file.path', file.path)
                let fileContents = file.contents.toString()
                if (fileContents.indexOf("module=\"i18n\"") !== -1) {
                    console.log('==========已经引入wxs模块',)
                }
                else {
                    console.log('==========relativePath', relativePath)
                    fileContents = `<wxs src=\"${relativePath}\" module=\"i18n\" />\n` + fileContents
                    file.contents = new Buffer.from(fileContents)
                }

                file.contents = Buffer.from(fileContents)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            // console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}



export {
    insertWxs
}