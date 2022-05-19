// 正则方案，优先匹配双花括号，之后再一轮匹配非
import { series, parallel, src, dest } from 'gulp'
import fs from 'fs'
const prettier = require("prettier");
const cheerio = require('cheerio')
const mapStream = require('map-stream');
const colors = require('colors/safe')
import { pinyin } from 'pinyin-pro';
var rename = require('gulp-rename')
// const chalk = require('chalk')
// import chalk from 'chalk';
import path from 'path'
import { getKeyByCh } from '../lang/dictionary'
import {
    globFilter,
    globListFilter,
    getItemStr,
    getLogName,
    getPinyin
} from '../tools/index.js'
import { currentPath, targetPath, commonExt } from './path';


// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}

let translateList = []
let notTranslateList = []
const rpWxTask = () => {
    console.log('==========rpWx ',)
    translateList = []
    notTranslateList = []
    // FIXME:修改此处调整翻译路径
    const commonPath = './packageA/pages/freightSubscription/edit'
    // const commonPath = './pages/versions'
    // const commonPath = './components/fcl/'
    let srcPath = globFilter(path.resolve(targetPath, `${commonPath}/**/*.wxml`))
    let destPath = globFilter(path.resolve(targetPath, `${commonPath}/`))
    console.log('==========', srcPath)
    console.log('==========', destPath)
    return src([srcPath, ...commonExt], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                let fileContents = file.contents.toString()
                fileContents =
                handleTextLiteral(handleAttrLiteral(handleMustache(fileContents)))
                file.contents = Buffer.from(fileContents)
                console.log('==========file path', file.path)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            // console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}
// 处理mustache的变量
const handleMustache = (str = '') => {
    // console.log('==========handleMustache start',)
    let res = str.replace(/{{.*}}/g, (mustacheStr) => {
        // console.log('==========mustacheStr:', mustacheStr)
        let mustacheRes = mustacheStr.replace(/('.*?')|(".*?")/g, (quoteStr, quote, dbQuote) => {
            // console.log('==========quoteStr', quoteStr)
            if (hasCnChar(quoteStr)) {
                let cnStr = quoteStr.substring(1, quoteStr.length - 1)
                // console.log('==========cnStr', cnStr)
                let matchKey = getKeyByCh(cnStr)
                if (!matchKey || matchKey === cnStr) {
                    matchKey = "tempdic." + getPinyin(cnStr)
                    addNotTranslateItem({ cnStr, matchKey })
                }
                else {
                    // console.log('==========Match dictionary:', cnStr, ':', matchKey)
                    addTranslateItem({ cnStr, matchKey })
                }
                if (quote) {
                    return `i18n.t('${matchKey}',$_locale)`

                }
                else {
                    return `i18n.t("${matchKey}",$_locale)`
                }
            }
            else {
                return quoteStr
            }
        })
        return mustacheRes
    })
    // console.log('==========handleMustache end', res)
    return res
}
// 处理非mustache的属性字面量
const handleAttrLiteral = (str = '') => {
    // console.log('==========handleAttrLiteral start ',)
    let res = str.replace(/('.*?')|(".*?")/g, (quoteStr, quote, dbQuote) => {
        if (hasCnChar(quoteStr)) {
            let cnStr = quoteStr.substring(1, quoteStr.length - 1)
            // console.log('==========quoteStr', quoteStr)
            let matchKey = getKeyByCh(cnStr)
            if (!matchKey || matchKey === cnStr) {
                matchKey = "tempdic." + getPinyin(cnStr)
                addNotTranslateItem({ cnStr, matchKey })

            }
            else {
                // console.log('==========Match dictionary:', cnStr, ':', matchKey)
                addTranslateItem({ cnStr, matchKey })
            }

            return `"{{i18n.t('${matchKey}',$_locale)}}"`

        }
        else return quoteStr
    })
    // console.log('==========handleAttrLiteral end', res)
    return res
}
// 处理非mustache的内容面量
const handleTextLiteral = (str = '') => {
    // console.log('==========handleTextLiteral start ',)
    let res = str.replace(/[\u4e00-\u9fa5]+/g, (cnStr) => {
        // console.log('==========cnStr', cnStr)
        let matchKey = getKeyByCh(cnStr)
        if (!matchKey || matchKey === cnStr) {
            matchKey = "tempdic." + getPinyin(cnStr)
            addNotTranslateItem({ cnStr, matchKey })

        }
        else {
            // console.log('==========Match dictionary:', cnStr, ':', matchKey)
            addTranslateItem({ cnStr, matchKey })
        }

        return `{{i18n.t('${matchKey}',$_locale)}}`

    })
    // console.log('==========handleTextLiteral end', res)
    return res

}
// 接入dictionary
// const getKeyByCh = (ch) => {
//     if (ch === '数据') {
//         return 'common.shuju'
//     }
//     else
//         return ''
// }
const hasCnChar = (str = '') => {
    if (/[\u4e00-\u9fa5]+/g.test(str)) return true
    else return false
}
const addTranslateItem = (item) => {
    translateList.push(item)
}
const addNotTranslateItem = (item) => {
    notTranslateList.push(item)
}
const doLog = async () => {
    console.log('==========translateList', translateList)
    console.log('==========notTranslateList', notTranslateList)
    // 检查是否存在取用了导航栏标题的情景
    let filterList = translateList.filter(item => {
        if (/navTitle\..*/g.test(item.matchKey)) {
            return true
        }
        else {
            return false
        }
    })
    if (filterList.length > 0) {
        console.log(colors.red.underline("==========there are some match key in navTitle,please edit theme:"))
        console.log('==========', filterList)
    }
    doLogNotTranslate(notTranslateList)
    doLogInfo(translateList, notTranslateList, filterList)
    return true
}
const doLogNotTranslate = (list = []) => {
    if (list.length === 0) {
        console.log(colors.green('==========there is all translated!!!'))
        return
    }
    let itemListStr = notTranslateList.map(item => getItemStr(item)).join('\n')
    let strContent = `const tempDic = {\n${itemListStr}\n}`
    let name = getLogName('noTranslate')
    // strContent = prettier.format(objStr, { filepath: `${name}.js` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/", `${name}.js`), strContent)

}
const doLogInfo = (translateList, notTranslateList, filterList) => {
    let strContent = JSON.stringify({ translateList, notTranslateList, navTilteList: filterList })
    let name = getLogName('info')
    strContent = prettier.format(strContent, { filepath: `${name}.json` })
    fs.writeFileSync(path.resolve(__dirname, "../result/log/", `${name}.json`), strContent)

}
const rpWx = series(rpWxTask, doLog)

export {
    rpWx
}