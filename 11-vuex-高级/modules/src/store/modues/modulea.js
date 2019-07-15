const moduleA = {   // moduleA
    state: { num:10 }, // this.$store.state.a.num
    mutations: {  
        addNum(state,val){
            state.num += val  // vuex模块化之后执行的函数 this.$store.commit("a/addNum")
        }
    },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val) // this.$store.dispatch("a/syncAddNum")
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元 "  // this.$store.getters["a/addNums"]
        }
    }, 
    namespaced: true
}
export default moduleA