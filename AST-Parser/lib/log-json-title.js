import { series, parallel, src, dest } from 'gulp'
const mapStream = require('map-stream');
var rename = require('gulp-rename')
import path from 'path'
import { currentPath, targetPath } from './path';
// 获取命令行参数
const getArgOptions = () => {
    var minimist = require('minimist');
    var options = minimist(process.argv.slice(2));
    return options

}

const logJsonTitle = () => {
    console.log('==========insertWxs',)
    let srcPath = path.resolve(targetPath, "./**/*.json").replace(/\\/g, '/')
    let destPath = path.resolve(targetPath, "./").replace(/\\/g, '/')
    let ext1 = "!" + path.resolve(targetPath, "./node_modules/").replace(/\\/g, '/') + '/'
    let ext2 = "!" + path.resolve(targetPath, "./.git/").replace(/\\/g, '/') + '/'
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    console.log('==========extList', ext1, ext2)
    return src([srcPath, ext1], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                // let fileContents = file.contents.toString()
                // file.contents = Buffer.from(fileContents)
                console.log('==========file.path', file.path)
                cb(null, file)
            })

        )
        .pipe(rename((path) => {
            // console.log('==========rename path', path)
        })).pipe(

            dest(destPath)
        )
}



export {
    logJsonTitle
}