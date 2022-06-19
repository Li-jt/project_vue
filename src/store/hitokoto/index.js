import * as type from './types'
import {
  getHitokoto
} from '@/network/api/hitokoto'

export default {
  namespaced: true,
  state: {
    msg: ''
  },
  mutations: {
    [type.GETHITOKOTO](state, value) {
      state.msg = value;
    }
  },
  actions: {
    [type.GETHITOKOTO](context) {
      getHitokoto().then(res => {
        context.commit('getHitokoto', res.hitokoto);
        // console.log(res);
      })
    }
  }
}