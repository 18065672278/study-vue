<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui-" v-if="back" @click="goback"></i>
  </div>
</template>

<script>
  export default {
    name: "mHeader",
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #afd9ee;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }

  }
</style>
