
import path from 'path'
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
    return prefix + '__' + DateTime.todayStr('YYYY-MM-DD-HH:mm:ss')
}


export {
    globFilter,
    globListFilter,
    getItemStr,
    getLogName
}