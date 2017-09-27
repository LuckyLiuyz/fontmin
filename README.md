# fontmin
字体压缩Demo

# 操作步骤

## 1、新建文件夹fontmin，并在此文件夹下执行如下命令：
```shell
npm install -g fontmin
```
## 2、创建如下文件目录：
```
2.1、“fontmin\asset\font”；        ---压缩后的字体文件目录
2.2、“fontmin\src\font\xxx.ttf”；  ---源字体文件目录（此目录下存放源字体文件"xxx.ttf"）
2.3、“fontmin\index.js”;           ---执行脚本文件
```
## 3、执行脚本命令，查看结果：


- 3.1、脚本文件内容：
```javascript
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
```

- 3.2、执行命令截图如下：
<img alt="截图" width="670" src="https://github.com/Liuxiang66/fontmin/blob/master/img/01.png">

- 3.3、压缩前后文件大小比较：
<img alt="截图" width="670" src="https://github.com/Liuxiang66/fontmin/blob/master/img/02.png">


# 客户端下载地址（方便快捷）

## <a href="http://ecomfe.github.io/fontmin/#app">前往下载</a>


# 致谢

## <a href="https://github.com/ecomfe/fontmin">fontmin</a>





