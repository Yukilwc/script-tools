// 通过utf8区间，获取对应字符串
const getStrFromUtf8 = (list) => {

}


// function minifyFont(text, cb) {
//     gulp
//         .src('src/font/*.ttf')
//         .pipe(fontmin({
//             text: text
//         }))
//         .pipe(gulp.dest('dest/font'))
//         .on('end', cb);
// }

// gulp.task('fonts', function(cb) {

//     var buffers = [];

//     gulp
//         .src('index.html')
//         .on('data', function(file) {
//             buffers.push(file.contents);
//         })
//         .on('end', function() {
//             var text = Buffer.concat(buffers).toString('utf-8');
//             minifyFont(text, cb);
//         });

// });