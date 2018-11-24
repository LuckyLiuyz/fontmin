# fontmin
字体压缩工具，实现将体积大的字体文件，按需压缩，以便达到高速加载的目的。

# 操作步骤

## 1、下载此项目，执行如下命令,安装依赖：
```shell
npm install
```
## 2、执行如下脚本命令，查看压缩结果：
```node
npm run start
```

- 2.1、脚本文件内容：
```javascriptvar Fontmin = require('fontmin');
var srcPath = 'src/font/*.ttf'; // 字体源文件
var destPath = 'dist/font';    // 输出路径
// 按需提取的文字
var text = '我说你是人间的四月天；笑响点亮了四面风；轻灵在春的光艳中交舞着变。';

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
    console.log('fontmin success');// 成功
});
```

- 3.2、执行命令截图如下：
<img alt="截图" width="670" src="https://github.com/Liuxiang66/fontmin/blob/master/img/01.png">

- 3.3、压缩前后文件大小比较：
<img alt="截图" width="670" src="https://github.com/Liuxiang66/fontmin/blob/master/img/02.png">


# 致谢

## <a href="https://github.com/ecomfe/fontmin" target="_blank">fontmin</a>





