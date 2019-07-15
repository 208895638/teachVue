const moduleB = {

    state: { num:2 },
    mutations: { 
        addNum(state,val){
            state.num += val
        }
     },
     getters: {
         price(state){
             return  state.num + "元";
         }
     },  
    actions: { //使用ajax获取数据的时候就是执行的异步操作
        syncAdd({ commit },val){
            commit("addNum",val)
        }
    },
    namespaced: true
}
export default moduleB