import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "@/api/index.js"
Vue.prototype.$ajax = axios ; // 调用时候   this.$ajax.post/get
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
