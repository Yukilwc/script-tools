
import { series, parallel, src, dest } from 'gulp'
import { Cheerio } from 'cheerio'
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
    console.log('==========',srcPath)
    console.log('==========',destPath)
    return src([srcPath], { allowEmpty: true })
        .pipe(
            mapStream(function (file, cb) {
                let fileContents = file.contents.toString()
                // source.forEach(item => {
                //     let reg = new RegExp(item.value, 'gi')
                //     fileContents = fileContents.replace(reg, `var(${item.name})`
                //     )
                // })
                fileContents += "\n<view></view>"
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
export {
    rpWx
}