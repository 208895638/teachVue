import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import moduleA from "./modues/modulea";
import moduleB from "./modues/moduleb";
export default new Vuex.Store({
    modules: {
      moduleb: moduleB,    // b 模块 存储的 用户购买的商品
      a: moduleA,   //  a模块  比如a模块作用是存储用户信息的 比如年龄 名称等
     
    } 
})
