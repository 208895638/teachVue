import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     num:1,
//     age:30,
//     name : '张三'
//   },
//   getters:{
//     price(state){
//       return state.num + "元"
//     },
//     ages(state){
//       return state.age + "岁"
//     },
//     names(state){
//       return state.name + "的宝贝"
//     }
//   },
//   mutations: {
//     add(state){
//       state.num ++ ;
//     }
//   },
//   actions: {
//     syncAdd({commit}){
//       commit("add")
//     }
//   }
// })

const moduleA = {
  state: { num:1 },
  mutations: {  },
  actions: {  },
  getters: {  }
}

const moduleB = {
  state: { num:2 },
  mutations: {  },
  actions: {  }
}


const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
export default store
// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态