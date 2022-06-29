import Vue from "vue";
import Vuex from "vuex";
import hitokotoOptions from './hitokoto'
import countOptions from './count'
import userOptions from './user'
import climbingTower from './game/climbingTower'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countOptions,
    hitokotoOptions,
    userOptions,
    climbingTower
  },
})