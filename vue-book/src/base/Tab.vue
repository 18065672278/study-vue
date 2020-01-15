<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-index-copy"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-listpress"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Tab"
  }
</script>
<!--
  display:flex;
  flex-direction: row/column;
  justify-content:center;垂直居中
  align-items: center;水平居中
  flex:1; 每份占1
  /home(两个路径必须一致就是确切的)        /home/a
  router-link-exact-active(确切激活的)   router-link-active(激活的)
-->
<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cccccc;

    a {
      display: flex;
      color: yellowgreen;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    a.router-link-active {
      color: red;
    }
  }
</style>
