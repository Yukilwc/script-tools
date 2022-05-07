import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import fs from 'fs'
import path from 'path'
const prettier = require("prettier");
import pagesJson from '../result/pages.json'
import {
    globFilter,
    globListFilter
} from '../tools/index'
import { cn,en } from '../lang/dictionary';
import { currentPath, targetPath, extJson, commonExt } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}
const insertTitleIntoJs = (cb) => {
    let pages = pagesJson.filter(page => page.navigationBarTitleText)
    let res = getKeyByChFromNavTitle('我的')
    console.log('==========key',res)
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

export {
    insertTitleIntoJs
}