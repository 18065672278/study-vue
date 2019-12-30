let str = require('./a.js');
console.log(str);
let a = b => c => d => b + c + d;
console.log(a(2)(3)(4));

let obj = {name:'aaa'};
let obj1 = {age:8};
let newObj = {...obj,...obj1};//es7
console.log(newObj);

import './index.css';//引入css文件
import './style.less';

//在js中引入图片需要import，或者直接写一个线上路径
import page from './1.png';
console.log(page);//page 就是打包后图片的路径
let img = new Image();
img.src = page;//写一个字符串，webpack不会进行查找
document.body.appendChild(img);
