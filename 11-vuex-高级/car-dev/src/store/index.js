import Vue from 'vue'
import Vuex from 'vuex'
import car from "./modules/car"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    car
  }
})
