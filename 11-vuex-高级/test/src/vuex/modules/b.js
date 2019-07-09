const moduleB = {
    namespaced: true,
    state: { num:2 },
    mutations: { 
        addNum(state,val){
            state.num += val
        }
     },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val)
        }
    },
    getters: {
        addNum1(state){
            return state.num + "元"
        }
    }
  }
export default moduleB