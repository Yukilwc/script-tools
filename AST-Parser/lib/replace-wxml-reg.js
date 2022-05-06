// 正则方案，优先匹配双花括号，之后再一轮匹配非
import { series, parallel, src, dest } from 'gulp'
const cheerio = require('cheerio')
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import path from 'path'
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const rpWx = () => {
    console.log('==========rpWx ',)
    let srcPath = path.resolve(__dirname, "../src/**/*.wxml")
    let destPath = path.resolve(__dirname, "../src/")
    console.log('==========', srcPath)
    console.log('==========', destPath)
    return src([srcPath], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                let fileContents = file.contents.toString()
                handleLiteral(handleMustache(fileContents))
                file.contents = Buffer.from(fileContents)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}
const handleMustache = (str = '') => {
    console.log('==========handleMustache start',)
    let res = str.replace(/{{.*}}/g, (mustacheStr) => {
        console.log('==========mustacheStr:', mustacheStr)
        let mustacheRes = mustacheStr.replace(/('.*?')|(".*?")/g, (quoteStr, quote, dbQuote) => {
            console.log('==========quoteStr', quoteStr)
            if (hasCnChar(quoteStr)) {
                let cnStr = quoteStr.substring(1, quoteStr.length - 1)
                console.log('==========cnStr', cnStr)
                let matchKey = getKeyByCh(cnStr)
                return quoteStr
            }
            else {
                return quoteStr
            }
        })
        return mustacheRes
    })
    return res
}
const getKeyByCh = () => {
    return 'key'
}
const hasCnChar = (str = '') => {
    if (/[\u4e00-\u9fa5]+/g.test(str)) return true
    else return false
}
const handleLiteral = (str) => {
    return str
}

export {
    rpWx
}