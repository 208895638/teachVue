import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1
  },
  getters:{
    nums(state){
      return state.num + "元"
    }
  },
  mutations: {
    updateNum(state,val){
        state.num += val; 
      
      
    }
  },
  actions: {
    syncUpdate(context ,val){
      console.log(context)
      setTimeout(function(){
        context.commit("updateNum",val)  
      },400)
      
    },
    syncUpdate({commit} ,val){
      console.log(context)
      setTimeout(function(){
        commit("updateNum",val)  
      },400)
      
    },
  }
})
