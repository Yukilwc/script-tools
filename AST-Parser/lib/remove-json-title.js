import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import fs from 'fs'
import path from 'path'
const prettier = require("prettier");
import {
    globFilter,
    globListFilter
} from '../tools/index'

import { currentPath, targetPath, extJson, commonExt } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const removeJsonTitle = () => {
    let srcPath = globFilter(path.resolve(targetPath, "./**/*.json"))
    let destPath = globFilter(path.resolve(targetPath, "./"))
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    return src([srcPath, ...commonExt, extJson], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                console.log('==========file.path', file.path)
                let fileContents = file.contents.toString()
                let jsonObj = null
                try {
                    jsonObj = JSON.parse(fileContents)
                }
                catch (e) {
                    console.warn('==========json parse error', file.path)
                    jsonObj = null
                }
                if (jsonObj && navigationBarTitleText.jsonObj) {
                    delete jsonObj.navigationBarTitleText
                    let writeStr = JSON.stringify(jsonObj)
                    writeStr = prettier.format(writeStr, { filepath: `${path.basename(file.path, '.json')}.json` })
                    file.contents = Buffer.from(writeStr)
                }
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
    removeJsonTitle
}