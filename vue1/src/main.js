import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  //console.log(to)
  if(to.meta.userInfo == ""){
    alert("暂未登陆,请先登录!");
    next(false)
  }else{
    next()
  }
  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
