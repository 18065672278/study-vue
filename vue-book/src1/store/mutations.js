import * as Types from "./mutation-type"
const mutations = {
  [Types.INCREMENT](state, count) {//state是自动放入的，默认指的就是当前的state
    state.count += count;
  },
  [Types.DECREMENT](state, count) {//state是自动放入的，默认指的就是当前的state
    if (state.count == 0) {
      return;
    }
    state.count -= count;
  }
};
export default mutations

//宏 快捷键

