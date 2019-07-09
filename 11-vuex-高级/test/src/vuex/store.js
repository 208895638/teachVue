import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleA from "./modules/a"
import moduleB from "./modules/b"
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
//export default store
// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态