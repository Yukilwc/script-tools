import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import traverse from "@babel/traverse";
import * as generator from "@babel/generator";
import * as t from '@babel/types'
import * as parser from "@babel/parser"
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
const insertTitleIntoJsTask = async () => {
    translateList = []
    notTranslateList = []
    let pages = pagesJson.filter(page => page.navigationBarTitleText)
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i]
        let cnStr = page.navigationBarTitleText
        let matchKey = getKeyByChFromNavTitle(cnStr)
        if (matchKey && matchKey !== cnStr) {
            // 有匹配到
            // console.log('==========key', matchKey)
            translateList.push({ cnStr, matchKey })
            insertTitle2Page({ page, cnStr, matchKey })
        }
        else {
            // console.log('==========没有匹配到',)
            notTranslateList.push({ cnStr, matchKey: "tempDic." + getPinyin(matchKey) })
        }
    }
    return true
}
const insertTitle2Page = ({ page, cnStr, matchKey }) => {
    // if (page.navigationBarTitleText !== '公司客户') return
    let jsPath = page.jsPath
    let strContent = fs.readFileSync(jsPath, "utf8")
    if (/Page\(\{[\s\S]+navTitleKey:/g.test(strContent)) {
        console.log('==========navTitleKey is existing', cnStr)
        return
    }
    let key = matchKey.split('.')[1]
    strContent = strContent.replace(/Page\(\{/, `Page({\n  navTitleKey: "${key}",//${cnStr}\n`)
    fs.writeFileSync(jsPath, strContent)

}
const insertTitle2PageUseAst = ({ page, cnStr, matchKey }) => {
    if (page.navigationBarTitleText !== '公司客户') return
    let jsPath = page.jsPath
    let strContent = fs.readFileSync(jsPath, "utf8")
    // console.log('==========strContent',strContent)
    if (/Page\(\{[\s\S]+navTitleKey:/g.test(strContent)) {
        console.log('==========navTitleKey is existing', cnStr)
        return
    }
    let ast = parser.parse(strContent)
    traverse(ast, {
        CallExpression(path) {
            // console.log('==========CallExpression',)
            let callee = path.node.callee
            // console.log('==========',path.node.callee.name)
            if (t.isIdentifier(callee, { name: 'Page' })) {
                console.log('==========CallExpression(path)', path.node)
            }
        }
    })
    console.log('==========traverse end',)
    strContent = generator.default(ast).code
    fs.writeFileSync(jsPath, strContent)

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
    // console.log('==========translateList', translateList)
    // console.log('==========notTranslateList', notTranslateList)
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
    strContent = prettier.format(strContent, { filepath: `${name}.js` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/title/", `${name}.js`), strContent)

}
const doLogInfo = (translateList, notTranslateList, filterList) => {
    let strContent = JSON.stringify({ translateList, notTranslateList })
    let name = getLogName('navTitle-info')
    strContent = prettier.format(strContent, { filepath: `${name}.json` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/title/", `${name}.json`), strContent)

}
const insertTitleIntoJs = series(insertTitleIntoJsTask, doLog)
export {
    insertTitleIntoJs
}