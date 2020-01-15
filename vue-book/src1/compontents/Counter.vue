<template>
  <div>
    计数器:
    <button @click="minus">-</button>
    <br>
    当前:{{this.$store.state.count}}<br>
    计数器:<button @click="add">+</button>
    <br>
    {{$store.getters.val}}
  </div>
</template>

<script>
  import * as Types from "../store/mutation-type"
  export default {
    name: "Counter",
    methods:{
      add(){
        //提交add的mutation
        //载荷payload
        this.$store.commit(Types.INCREMENT,2)
      },
      minus(){
        this.$store.commit(Types.DECREMENT,1)
      }
    }
  }
</script>

<style scoped>

</style>
