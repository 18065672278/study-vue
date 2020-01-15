// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//导入轮播图插件
import 'swiper/dist/css/swiper.css'
//使用轮播图插件
Vue.use(VueAwesomeSwiper)
//使用图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://suo.im/5ukeFb',
  loading: 'http://suo.im/5BQrBu',
  attempt: 1
})
//在进入路由之前 每一次都会执行此方法  全局钩子 拦截功能
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title == undefined ? 'vue-book' : to.meta.title;
  /*if(to.path === '/list'){//设置拦截  当跳转到list的时候拦截下来让其跳转到add  这个功能一般作为权限控制
    next({path:'/add'})
  }*/
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
