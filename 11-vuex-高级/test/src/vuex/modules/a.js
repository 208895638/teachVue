const moduleA = {
    state: { num:1 },
    namespaced: true,
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
        addNum2(state){
            return  state.num + "元"
        }
    }
  }
  export default moduleA