import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from './store'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => { 
  //console.log(to,from);
  //next()  // 判断有没有权限进入这个页面
  //next("false")
  next()
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
