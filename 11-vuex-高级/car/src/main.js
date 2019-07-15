import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mock from "mockjs"
Vue.config.productionTip = false
Vue.prototype.mock = mock;
Vue.prototype.random = mock.Random;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
