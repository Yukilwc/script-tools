// 同步语言翻译词典到本地
import {
    globFilter,
    globListFilter
} from '../tools/index'
import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import path from 'path'
import { currentPath, targetPath, commonExt } from './path';
const syncDic = () => {
    console.log('==========insertWxs',)
    let srcPath = globFilter(path.resolve(targetPath, "./lang/dictionary.js"))
    let destPath = globFilter(path.resolve(currentPath, "./lang/dictionary.js"))
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    return src([srcPath], { allowEmpty: true })
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}

export {
    syncDic
}

