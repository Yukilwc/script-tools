
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
                let $ = cheerio.load(fileContents, { xmlMode: false, decodeEntities: true})
                $('body *').contents().map((i, el) => {
                    // console.log('==========item', $(el))
                    console.log('==========item', i)
                    let newEl = $(el)
                    let keyList = Object.keys(el.attribs || {})
                    let valList = keyList.map(key => newEl.attr(key))
                    // console.log('==========', keyList, valList)
                    console.log('==========type', el.type, el.name)
                    // if (el.type === 'text' && newEl.text().trim()) {
                    //     console.log('==========text', newEl.text())
                    //     newEl[0].data = '新内容'
                    // }
                    // newEl.attr("class", 'test')
                    return newEl
                })
                console.log('==========', $('body').html())
                // source.forEach(item => {
                //     let reg = new RegExp(item.value, 'gi')
                //     fileContents = fileContents.replace(reg, `var(${item.name})`
                //     )
                // })
                file.contents = Buffer.from(fileContents)
                // file.contents = Buffer.from($('body').html())
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