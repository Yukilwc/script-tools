import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import fs from 'fs'
import path from 'path'
const prettier = require("prettier");
import pages from '../result/pages.json'
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
const insertTitleIntoJs = () => {
    console.log('==========pages',pages)
}
export {
    insertTitleIntoJs
}