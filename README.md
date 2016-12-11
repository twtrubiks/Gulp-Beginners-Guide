# Gulp 基本使用教學:memo:
因為小弟覺得這東西非常實用，所以就簡單寫個教學文，順便記錄一下:memo:，希望能幫助想學的人:smile:

如果教學有誤再請糾正:sweat_smile:

影片介紹 [Gulp基本教學 - 從無到有 Gulp-Beginners-Guide]()

## Gulp 介紹

[Gulp](http://gulpjs.com/) 官網

大家可能有聽過 [Grunt](http://gruntjs.com/) ，也可能沒聽過，但沒關係，基本上，

[Grunt](http://gruntjs.com/) 和 [Gulp](http://gulpjs.com/) 類似，都是前端自動化的工具，

[Grunt](http://gruntjs.com/) 是很久以前就出來了，而 [Gulp](http://gulpjs.com/) 則是後期才出來的，

但因為 [Gulp](http://gulpjs.com/) 更潮、更方便，所以漸漸用 [Gulp](http://gulpjs.com/) 的人比較多，

如果你有使用 [yeoman](http://yeoman.io/)，建模出來的版型也已經是附加 <b>gulpfile.js</b> ，而不是 <b>gruntfile.js</b> ，

所以，我們就直接學 [Gulp](http://gulpjs.com/) 吧 :smiley:


## 前置安裝作業 - 安裝 node.js

因為我們需要使用 npm ( Node Package Manager )，而他是 Node.js 的套件（package）管理工具，

所以我們必須先安裝 <b>node.js</b>，請先到 [Node.js](https://nodejs.org/en/) 官網，下載後安裝即可，如何確認是否安裝成功呢 ?

在 cmd (命令提示字元) 輸入

```
node -v
```
如果有跑出 node.js 版本號代表安裝成功，如下圖

![alt atg](http://i.imgur.com/EQ7MnfL.png)

## 開始使用 Gulp

參考 [gulpjs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) 官網教學

使用 cmd (命令提示字元) 輸入以下指令

```
npm install --global gulp-cli
```

接著在目標資料夾底下初始化
```
npm init
```

會要你輸入一些資料，如不想設定直接按 Enter

![alt atg](http://i.imgur.com/uCuLV1L.png)

在目標資料夾底下，會多出 <b>package.json </b>

在專案底下安裝 Gulp，請使用 cmd (命令提示字元) 輸入以下指令
```
npm install --save-dev gulp
```

建立一個名稱為 <b>gulpfile.js</b> 的檔案，並在 gulpfile.js 裡輸入下方程式碼
```
var gulp = require('gulp');

gulp.task('default', function() {
  console.log("hello gulp ~!")
});
```

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp default
```

使用任務 task 方法
```
gulp <task>
```

如果你可以順利的看到 hello gulp ~! ，如下圖，就代表你成功了 :satisfied:

![alt tag](http://i.imgur.com/L4ydedN.png)

## Plugins

在 [Gulp plugins](http://gulpjs.com/plugins/) 目前有 2775 的套件可以使用，在這裡介紹幾個給大家~

#### gulp-uglify 

請參考 [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

目的 : 壓縮 javascript ，最小化 javascript

在專案底下安裝 gulp-uglify，請使用 cmd (命令提示字元) 輸入以下指令
```
npm install --save-dev gulp-uglify
npm install --save-dev pump
```

這時候可以先到 <b>package.json </b>底下看，你會發現多出一些東西，如下圖

![alt tag](http://i.imgur.com/uH6JXRZ.png)

接著到 <b>gulpfile.js</b> 裡面輸入下方程式碼
```
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('script/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
```

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp compress
```
如果順利成功，目標資料夾底下會多出 <b>dist</b> 資料夾，這資料夾裡面會有壓縮完的結果。

![alt tag](http://i.imgur.com/AAJ3EHz.png)

#### gulp-jshint

請參考 [gulp-jshint](https://github.com/spalger/gulp-jshint)

目的 : 檢查 javascript 是否有錯誤

在專案底下安裝 gulp-jshint，請使用 cmd (命令提示字元) 輸入以下指令
```
npm install --save-dev jshint gulp-jshint 
```

建議多安裝一個套件，美化格式
請參考 [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
```
npm install --save-dev jshint-stylish
```

接著到 <b>gulpfile.js</b> 裡面輸入下方程式碼
```
var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('lint', function() {
  return gulp.src('script/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
```

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp lint
```
![alt tag](http://i.imgur.com/Lytfat2.png)

gulp-jshint 會和你說你的 js 有哪些部份需要修改

#### gulp-htmlmin

請參考 [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)

目的 : 壓縮 html 

在專案底下安裝 gulp-jshint，請使用 cmd (命令提示字元) 輸入以下指令
```
npm install --save-dev gulp-htmlmin 
```
接著到 <b>gulpfile.js</b> 裡面輸入下方程式碼
```
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
```

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp minify
```
![alt tag](http://i.imgur.com/DkeZpyT.png)

如果順利成功，目標資料夾底下會多出 <b>dist</b> 資料夾，這資料夾裡面會有壓縮完的結果。


#### del 

請參考 [delete-files-folder](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

目的 : 刪除指定文件，通常我們在建立自動化 task 之前，都會先執行清空資料夾

在專案底下安裝 del，請使用 cmd (命令提示字元) 輸入以下指令
```
npm install --save-dev del
```
接著到 <b>gulpfile.js</b> 裡面輸入下方程式碼
```
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del(['dist']);
});

```

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp clean
```
![alt tag](http://i.imgur.com/emEvfbS.png)

如果順利成功，目標資料夾 <b>dist</b> 會被刪除。

## Gulp 一次執行全部 task 任務

每次都要執行

```
gulp <task>
gulp lint
gulp minify
```
雖然很簡單，但很煩 :persevere:，有辦法一次執行全部 task 任務呢 ?

是可以的 !!!

請到 <b>gulpfile.js</b> 裡面輸入下方程式碼

```
gulp.task('run-all-task',["default","clean","compress","lint","minify"]);
```

上面這段程式碼的意思是，先執行 default ，再執行 clean ，再執行 compress....

順序， default > clean > compress >  minify

接著在目標資料夾底下使用  cmd (命令提示字元) 
```
gulp run-all-task
```
![alt tag](http://i.imgur.com/PgOxIoR.png)
 
一次幫你執行全部 task 任務 :kissing_smiling_eyes:

## npm 一次安裝全部需要的套件

每次也都要執行
```
npm install --save-dev del
npm install --save-dev gulp-htmlmin 
npm install --save-dev jshint-stylish
npm install --save-dev jshint gulp-jshint
```
雖然很簡單，但也很煩 :persevere:，有辦法一次全部安裝嗎 ?

是有的 !!!

這時候可以先到 <b>package.json </b>底下輸入你要安裝的套件，如下圖

![alt tag](http://i.imgur.com/vcGo6Wr.png)

接著輸入以下指令
```
npm install --save-dev
```
 ![alt tag](http://i.imgur.com/lEUPeOR.png)
 
一次就會安裝全部的套件 ! ! :satisfied:

## 其他 Plugins 推薦

#### gulp-clean-css

請參考 [gulp-clean-css](https://github.com/scniro/gulp-clean-css)

目的 : 最小化 CSS 、 minify CSS。

#### gulp-notify

請參考 [gulp-notify](https://github.com/mikaelbr/gulp-notify)

目的 : 有時候專案很大，自動化需要一段時間執行，可以透過 gulp-notify ，當執行完畢後，

他會跳出視窗告知你自動化已經執行完畢。

#### gulp-imagemin

請參考 [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

目的 : 壓縮圖片。

#### browser-sync

請參考 [browser-sync](https://browsersync.io/)

目的 : 瀏覽器同步檢視，簡單說，只要將 browser-sync run 起來，你的 html css js 有修改，你的網頁就會自動刷新，

方便在多個不同的瀏覽器下觀看效果，不用再自己手動重新整理網頁。

#### gulp-concat

請參考 [gulp-concat](https://github.com/contra/gulp-concat)

目的 : 合併檔案，例如，可以將 5(多) 個 CSS 檔案合併成一個 CSS 。


