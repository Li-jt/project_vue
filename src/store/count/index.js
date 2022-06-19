import * as type from './types'
export default {
  namespaced: true,
  mutations: {
    [type.INCREMENT](state, value) {
      state.sum += value;
    },
    [type.DECREMENT](state, value) {
      state.sum -= value;
    }
  },
  actions: {
    [type.INCREMENTODD](context, value) {
      console.log(context, value);
      if (context.state.sum % 2 != 0) {
        context.commit('increment', value);
      }
    },
  },
  state: {
    sum: 0
  },
  getters: {
    [type.BIGSUM](state) {
      return state.sum * 10
    }
  },
}