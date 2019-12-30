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
