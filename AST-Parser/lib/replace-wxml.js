
import { series, parallel, src } from 'gulp'
import { Cheerio } from 'cheerio'
const mapStream = require('map-stream');
var rename = require('gulp-rename')

const rpWx = () => {
    console.log('==========rpWx ',)
    return src(["../src/**.*.wxml"], { allowEmpty: true }).pipe(
        mapStream(function (file, cb) {
            let fileContents = file.contents.toString()
            // source.forEach(item => {
            //     let reg = new RegExp(item.value, 'gi')
            //     fileContents = fileContents.replace(reg, `var(${item.name})`
            //     )
            // })
            fileContents += "\n<view></view>"
            file.contents = new Buffer(fileContents)
            cb(null, file)
        })

    ).pipe(rename((path) => {
        console.log('==========rename path', path)
    })).pipe(
        gulp.dest('../src/')
    )
}
export {
    rpWx
}