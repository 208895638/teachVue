import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 获取本地存储
  if(to.meta.username==""){
    alert("暂未登陆!")
    next(false)
  }else{
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
