import Vue from 'vue'
import Vuex from 'vuex'
import modulea from "./modules/car"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    modulea
  }
})
