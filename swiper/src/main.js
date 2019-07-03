import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
