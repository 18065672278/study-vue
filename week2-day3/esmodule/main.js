// 如果是第三方模块不需要加'./'
// 如果是文件模块（自己写的）需要加‘./’
//在另一个文件中将内容解构出来即可使用
//import 拥有声明功能
//import  放到页面顶部
//import {str1,str2,a} from './a.js'
import * as b from './a.js';
console.log(b.str1,b.str2);
b.a();

// xx 代表的是default后的结果
import xx from './b.js';
console.log(xx)