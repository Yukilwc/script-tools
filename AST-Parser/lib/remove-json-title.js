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
                let fileContents = file.contents.toString()
                let jsonObj = null
                try {
                    jsonObj = JSON.parse(fileContents)
                }
                catch (e) {
                    console.warn('==========json parse error', file.path)
                    jsonObj = null
                }
                if (jsonObj && jsonObj.navigationBarTitleText && jsonObj.navigationBarTitleText.trim()) {
                    console.log('==========delete file.path', file.path)
                    // delete jsonObj.navigationBarTitleText
                    jsonObj.navigationBarTitleText = '   '
                    fileContents = JSON.stringify(jsonObj)
                    fileContents = prettier.format(fileContents, { filepath: `${path.basename(file.path, '.json')}.json` })
                    // fileContents = fileContents.replace(/,?[\s]*"navigationBarTitleText"\s*:\s*".*?",?/g, '')
                    file.contents = Buffer.from(fileContents)
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