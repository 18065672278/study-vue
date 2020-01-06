//webpack 必须采用common的写法
let path = require('path');//专门处理路径用的
console.log(path.resolve('.dist'));//已当前路径解析一个相对路径
let HtmlWebpagePlugin = require('html-webpack-plugin');
module.exports = {
    entry: {main: './src/main.js'},//打包的入口文件，webpack会自动查找相关依赖的包进行打包
    output: {
        filename: 'build.js',//打包后的名字（自己起的）
        path: path.resolve('.dist')//必须是一个绝对路径
    },
    //模块解析规则
    //-js 匹配所有的js 用babel-loader转译 排除掉node-modules
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader', exclude: /node-modules/
            },
            //use时从右往左写
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                //转换base64只在8K（8192）以下转化，其他的直接输出图片
                test: /\.(jpg|png|gif)$/, use: 'url-loader?limit=8192'
            }
        ]
    },
    plugins:[
        new HtmlWebpagePlugin({//自动插入到dist目录中
            template:'./src/index.html',//使用的模板
            //filename: 'login.html'//产出的文件名字（默认为index.html）
        })
    ],
}