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

import { currentPath, targetPath } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
let resultList = []
const addResultList = (file) => {
    let fileContents = file.contents.toString()
    let jsonObj = null
    try {
        jsonObj = JSON.parse(fileContents)
    }
    catch (e) {
        console.warn('==========json parse error', file.path)
        jsonObj = null
    }
    if (jsonObj) {
        resultList.push({
            navigationBarTitleText: jsonObj.navigationBarTitleText || '',
            jsonPath: file.path,
        })
    }
}
const readTitle = () => {
    console.log('==========insertWxs',)
    resultList = []
    let srcPath = globFilter(path.resolve(targetPath, "./**/*.json"))
    let destPath = globFilter(path.resolve(targetPath, "./"))
    let ext1 = globFilter(path.resolve(targetPath, "./node_modules/")) + '/**'
    let ext2 = globFilter(path.resolve(targetPath, "./.git/")) + '/**'
    let ext3 = globFilter(path.resolve(targetPath, "./*.json"))
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    console.log('==========extList', ext1, ext2)
    // return src(["D:/glob/**/*.json", "!D:/glob/node_modules/**"], { allowEmpty: true })
    return src([srcPath, `!${ext1}`, `!${ext2}`, `!${ext3}`], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                // let fileContents = file.contents.toString()
                // file.contents = Buffer.from(fileContents)
                // console.log('==========file.path', file.path)
                addResultList(file)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            // console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}
const writeResult = (cb) => {
    resultList = resultList.map(item => {
        let dirPath = path.dirname(item.jsonPath)
        let baseName = path.basename(item.jsonPath, '.json')
        let jsPath = path.format({ dir: dirPath, name: baseName, ext: '.js' })
        return {
            navigationBarTitleText: item.navigationBarTitleText,
            dirPath,
            baseName,
            jsonPath: item.jsonPath,
            jsPath
        }
    })
    console.log('==========addResultList length', resultList.length)
    let strContent = JSON.stringify(resultList)
    strContent = prettier.format(strContent, { filepath: 'pages.json' })
    fs.writeFile(path.resolve(__dirname, "../result/pages.json"), strContent, (err) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log('==========write success',)
            cb()
        }
    })
}
const logJsonTitle = series(readTitle, writeResult)



export {
    logJsonTitle
}