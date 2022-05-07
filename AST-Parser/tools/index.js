
import path from 'path'
import { pinyin } from 'pinyin-pro';
import { DateTime } from './DateTime.js'
const globListFilter = (list = []) => {
    return list.map(item => globFilter(item))
}
const globFilter = (str = '') => {
    return str.split(path.sep).join('/')
}
const getItemStr = (item) => {
    let matchKey = item.matchKey.split('.')[1]
    let cnStr = item.cnStr
    let str = `${matchKey}: ["${cnStr}",""],`
    return str
}
const getLogName = (prefix) => {
    return prefix + '__' + DateTime.todayStr('YYYYMMDDHHmmss')
}
const getPinyin = (str) => {
    let py = pinyin(str, { toneType: 'none', type: 'array', removeNonZh: false }).join('').substring(0, 30)
    // console.log('==========getPinyin', str, py)
    return py
}


export {
    globFilter,
    globListFilter,
    getItemStr,
    getLogName,
    getPinyin
}