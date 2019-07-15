import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{},
  state: {
    num:21
  },
  getters:{
    price(state){
      return state.num + ",元"
    }
  },
  mutations: {
    add1(state){  // commit提交
      state.num ++;
    },
    add2(state , val){
      state.num += val;
    }
  },
  actions: {
    adds({commit}){ // dispatch 提交
      commit("add1")
    }
  }
})
