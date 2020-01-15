import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";//logger是一个日志插件
import mutations from "./mutations";
Vue.use(Vuex);
//容器就是唯一的
const state = {count: 0};
const getters = {
  val:()=>state.count%2?'奇数':'偶数'
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [logger()],
  strict: true//表示只能通过mutation(管理员)来更改状态,mautation不支持异步
})
