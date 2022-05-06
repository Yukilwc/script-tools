import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import path from 'path'
import {
    globFilter,
    globListFilter
} from '../tools/index'

import { currentPath, targetPath } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}

const logJsonTitle = () => {
    console.log('==========insertWxs',)
    let srcPath = globFilter(path.resolve(targetPath, "./**/*.json"))
    let destPath = globFilter(path.resolve(targetPath, "./"))
    let ext1 = globFilter(path.resolve(targetPath, "./node_modules/")) + '/**'
    let ext2 = globFilter(path.resolve(targetPath, "./.git/")) + '/**'
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    console.log('==========extList', ext1, ext2)
    // return src(["D:/glob/**/*.json", "!D:/glob/node_modules/**"], { allowEmpty: true })
    return src([srcPath, `!${ext1}`, `!${ext2}`], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                // let fileContents = file.contents.toString()
                // file.contents = Buffer.from(fileContents)
                console.log('==========file.path', file.path)
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
    logJsonTitle
}