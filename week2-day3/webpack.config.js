//webpack 必须采用common的写法
let path = require('path');//专门处理路径用的
console.log(path.resolve('.dist'));//已当前路径解析一个相对路径
module.exports = {
    entry:'./src/main',//打包的入口文件，webpack会自动查找相关依赖的包进行打包
    output:{
        filename:'builder.js',//打包后的名字（自己起的）
        path: path.resolve('.dist')//必须是一个绝对路径
    }
}