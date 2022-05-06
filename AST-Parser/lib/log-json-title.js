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
    let srcPath = path.resolve(targetPath, "./**/*.json")
    let destPath = path.resolve(targetPath, "./")
    console.log('========== srcPath', srcPath)
    console.log('========== destPath', destPath)
    return src([srcPath, '!node_modules/', '!.git/'], { allowEmpty: true })
        // .pipe(
        //     mapStream(function (file, cb) {
        //         let fileContents = file.contents.toString()
        //         file.contents = Buffer.from(fileContents)
        //         cb(null, file)
        //     })

        // )
        .pipe(rename((path) => {
            console.log('==========rename path', path)
        })).pipe(
            dest(destPath)
        )
}



export {
    logJsonTitle
}