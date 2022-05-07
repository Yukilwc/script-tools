import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import fs from 'fs'
import path from 'path'
const prettier = require("prettier");
import pagesJson from '../result/pages.json'
import {
    globFilter,
    globListFilter,
    getItemStr,
    getLogName,
    getPinyin
} from '../tools/index'
import { cn, en } from '../lang/dictionary';
import { currentPath, targetPath, extJson, commonExt } from './path';
let translateList = []
let notTranslateList = []
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const insertTitleIntoJsTask = (cb) => {
    translateList = []
    notTranslateList = []
    let pages = pagesJson.filter(page => page.navigationBarTitleText)
    pages.forEach(page => {
        let cnStr = page.navigationBarTitleText
        let matchKey = getKeyByChFromNavTitle(cnStr)
        if (matchKey && matchKey !== cnStr) {
            // 有匹配到
            console.log('==========key', matchKey)
            translateList.push({ cnStr, matchKey })
        }
        else {
            console.log('==========没有匹配到',)
            notTranslateList.push({ cnStr, matchKey:getPinyin(matchKey) })
        }
    })
    cb()
}
const getKeyByChFromNavTitle = (ch) => {
    let cnKeys = Object.keys(cn).filter(key => {
        if (/^navTitle\..*$/g.test(key)) return true
        else return false
    })
    let findRes = cnKeys.find(key => {
        if (cn[key] === ch) {
            return true
        }
        else {
            return false
        }
    })
    if (findRes && en[findRes] && en[findRes] !== findRes) {
        // console.log('==========存在可替换的中文key', findRes, en[findRes])
        return findRes
    }
    else {
        return ch
    }
}
const doLog = async () => {
    console.log('==========translateList', translateList)
    console.log('==========notTranslateList', notTranslateList)
    doLogNotTranslate(notTranslateList)
    doLogInfo(translateList, notTranslateList)
    return true
}
const doLogNotTranslate = (list = []) => {
    if (list.length === 0) {
        console.log(colors.green('==========there is all translated!!!'))
        return
    }
    let itemListStr = notTranslateList.map(item => getItemStr(item)).join('\n')
    let strContent = `const tempDic = {\n${itemListStr}\n}`
    let name = getLogName('navTitle-noTranslate')
    // strContent = prettier.format(objStr, { filepath: `${name}.js` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/", `${name}.js`), strContent)

}
const doLogInfo = (translateList, notTranslateList, filterList) => {
    let strContent = JSON.stringify({ translateList, notTranslateList })
    let name = getLogName('navTitle-info')
    strContent = prettier.format(strContent, { filepath: `${name}.json` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/", `${name}.json`), strContent)

}
const insertTitleIntoJs = series(insertTitleIntoJsTask, doLog)
export {
    insertTitleIntoJs
}