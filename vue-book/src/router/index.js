import Vue from 'vue'
import Router from 'vue-router'
/*import Add from '../components/Add'
import Collect from '../components/Collect'
import Detail from '../components/Detail'
import Home from '../components/Home'
import List from '../components/List'*/

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: ()=>import('../components/Home'),//动态加载的方法
      meta:{keepAlive:true}
    },//this.$route.meta.keepAlive  为true需要缓存，false不用
    {
      path: '/list',
      name: 'List',
      component: ()=>import('../components/List')
    },
    {
      path: '/collect',
      name: 'Collect',
      component: ()=>import('../components/Collect')
    },
    {
      path: '/add',
      name: 'Add',
      component: ()=>import('../components/Add')
    },
    {
      path: '/detail/:bid',
      name: 'Detail',
      component: ()=>import('../components/Detail')
    },
    {
      path: '*',
      name: '*',
      redirect: '/home'
    },

  ]
})
