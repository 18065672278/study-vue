## vue-cli
- 下载一个全局生成的vue项目的脚手架
```
    npm install vue-cli -g
    vue init webpack <项目名字>
    cd 项目名字
    vue install
    vue run dev
```

## 模块
- node模块的规范commonjs
- cmd seajs amd require
- umd 为了做兼容处理的
- esmodule
    - 如何定义模块 (一个js就是一个模块)
    - 如何导出模块 (export)
    - 如何使用模块 (import)
    
## 下载webpack
```
第一种： npm install webpack -g （不建议使用）
第二种： npm init -y
        npm install webpack -dev(开发版本 不需要线上版本)

```
> 安装webpack或者less最好不要安装全局的，否则可能会导致webpapck的版本差异


- 在pack.json中配置一个脚本，这个脚本用的命令是webpack。回去当前的node_modules找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要在当前目录下有个名字叫webpack.config.js的文件，我们通过npm run build 执行的目录是当前文件的目录，所以会去当前目录下查找。

## babel转义es6->es5
- 安装babel
```
    npm install babel-core --save-dev
    npm install babel-loader --save-dev
```
## babel-preset-es2015
- 让翻译官拥有解析es6语法的能力
```
    npm install babel-preset-es2015 --save-dev
```
## babel-preset-stage-0
- 让翻译官拥有解析es7语法的能力
```
    npm install babel-preset-stage-0 --save-dev
```
## 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内（style-loader）
```
    npm install css-loader style-loader --save-dev
```

## less,sass,stylus(预处理语言)
- less-loader less
- sass-loader
- stylus-loader
```
    npm install less-loader less css-loader style-loader --save-dev
```
## 解析图片
- file-loader 
- url-loader(是依赖于file-loader)
```
    npm install file-loader url-loader --save-dev
```

## 需要解析HTML插件
-插件的作用是以我们自己的HTML为模板将打包后的结果自动引入到HTML中，产出到dist目录下
```
    npm install html-webpack-plugin --save-dev
```

## webpack-dev-server
- 这里面内置了服务,可以帮我们启动一个端口号，当代码更新时可以自动打包（在内存中打包？），代码有变化就重新执行
```
    npm install webpack-dev-server --save-dev
```

## 使用less
```$xslt
 npm install less less-loader axios vuex bootstrap
```
- mock 模拟数据
- api 代表的是所有的接口
- base 基础组件
- components 页面组件


## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加API方法实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个返回，将数据传递给基础组件
- 写一个基础组件
    - 想创建一个.vue文件
    - 在需要使用这个组件的父级中引用这个组件
    - 在组件中注册这个组件
    - 以标签的形式引入

## 路由元信息
- 在router->index中的对应路径增加meta:{keepAlive:true}
- 在App.vue 中增加keep-alive标签
```
    <keep-alive>
      <!--需要缓存的内容-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--不需要缓存的内容-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
```

## 下拉加载
- 每次默认给五条，前端告诉后台要从第几条开始给我
- /page?offset = 5
- 后台返回时还要告诉前端时候有更多的数据 hasMore:false/true
- 滚动到底部居然20px的地方，开始加载更多：元素.scrollTop + 元素.clientHeight + 20 == 元素.scrollHeight
-                                              元素距离顶部高度 +元素高度 +10px == 元素总高度

