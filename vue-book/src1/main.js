//vuex  平级组件交互，找相同的父级组件解决，跨组件交互，eventBu混乱（发布订阅）
//vuex  主要借鉴了flux redux,vuex只能在vue中使用（单独为vue开发的）
//vuex  为了大型项目开发的,主要是（状态）管理，将数据统一管理

import Vue from "vue";
import App from "./App";
import store from "./store"

new Vue({
  el: '#app',
  ...App,
  store,//store被注册到实例上，当前多有组件都会有一个this.$store 属性
})
