<template>
  <div id="app">
    <transition name="faldIn">
      <keep-alive>
        <!--需要缓存的内容-->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <!--不需要缓存的内容-->
    <transition name="faldIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>

<style>

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  /*切换页面动画 start*/
  .faldIn-enter {
    opacity: 0;
  }

  .faldIn-enter-active {
    transition: all 0.3s linear;
  }

  .faldIn-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
  }
  /*切换页面动画 end*/
</style>
