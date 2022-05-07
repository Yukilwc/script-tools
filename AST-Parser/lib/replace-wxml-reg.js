// 正则方案，优先匹配双花括号，之后再一轮匹配非
import { series, parallel, src, dest } from 'gulp'
const cheerio = require('cheerio')
const mapStream = require('map-stream');
import { pinyin } from 'pinyin-pro';
var rename = require('gulp-rename')
import path from 'path'
import {
    globFilter,
    globListFilter
} from '../tools/index'


// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const getPinyin = (str) => {
    let py = pinyin(str, { toneType: 'none', type: 'array' }).join('').substring(0, 30)
    console.log('==========getPinyin', str, py)
    return py
}
const rpWx = () => {
    console.log('==========rpWx ',)
    let srcPath = globFilter(path.resolve(__dirname, "../src/**/*.wxml"))
    let destPath = globFilter(path.resolve(__dirname, "../src/"))
    console.log('==========', srcPath)
    console.log('==========', destPath)
    return src([srcPath], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                let fileContents = file.contents.toString()
                // fileContents = 
                handleTextLiteral(handleAttrLiteral(handleMustache(fileContents)))
                file.contents = Buffer.from(fileContents)
                console.log('==========file path',file.path)
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
        }
        return `{{i18n.t('${matchKey}',$_locale)}}`

    })
    // console.log('==========handleTextLiteral end', res)
    return res

}
// 接入dictionary
const getKeyByCh = (ch) => {
    if (ch === '数据') {
        return 'common.shuju'
    }
    else
        return ''
}
const hasCnChar = (str = '') => {
    if (/[\u4e00-\u9fa5]+/g.test(str)) return true
    else return false
}


export {
    rpWx
}