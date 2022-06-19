import * as type from './types'
import {
  TOKEN
} from '@/utils/storage/storage-type'
import Vue from 'vue';
export default {
  namespaced: true,
  state: {
    token: '' || Vue.prototype.$localMemory.getItem(TOKEN),
  },
  mutations: {
    [type.SETTOKEN](state, value) {
      Vue.prototype.$localMemory.setItem({
        name: TOKEN,
        value
      })
      state.token = value;
    }
  }
}