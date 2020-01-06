import Vue from 'vue'
import Router from 'vue-router'
import Add from '../components/Add'
import Collect from '../components/Collect'
import Detail from '../components/Detail'
import Home from '../components/Home'
import List from '../components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{keepAlive:true}
    },//this.$route.meta.keepAlive  为true需要缓存，false不用
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/detail/:bid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: '*',
      redirect: '/home'
    },

  ]
})
