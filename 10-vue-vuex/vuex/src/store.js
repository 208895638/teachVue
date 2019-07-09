import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:30,
    name:"王五",
    num:1,
    area:"漳卅"
  },
  getters:{   // 类似与组件里面的计算属性
    nums(state){
      return state.num + "元"  // this.$store.getters.nums
    }
  },
  mutations: {  // 执行方法的地方  类似于methods
    updates(state,val){  // 这里呢是改变state里面的方法
      state.age = val;  // this.$store.commit("updates")
      state.name = val1;
      console.log(val,val1,66)
    },
    events(state,{num,name}){  // 在vuex官方叫法教 提交载荷
      //console.log(state,val,val1,2222)
      //setTimeout(function(){
        state.name = name;
        state.num = state.num + num;
      //},1000)
      
    }
  },
  actions: {  // 执行异步操作的地方  类似 ajax
    syncUpdate({commit , state}){
      //console.log(context,444)
      //state.age = 80;
      setTimeout(function(){
       commit("updates",{});  // this.$store.dispatch("syncUpdate")
      },1000)
      
    }
  }
})
