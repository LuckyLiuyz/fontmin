
console.log(123)
var Fontmin = require('fontmin');
var srcPath = 'src/font/*.ttf'; // 字体源文件
var destPath = 'asset/font';    // 输出路径
var text = '我说你是人间的四月天；笑响点亮了四面风；轻灵在春的光艳中交舞着变。';

console.log(text)

// 初始化
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))   
    .dest(destPath);            // 输出配置


// 执行
fontmin.run(function (err, files, stream) {
    if (err) {                  // 异常捕捉
        console.error(err);
    }
    console.log('done');        // 成功
});