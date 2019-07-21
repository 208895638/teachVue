import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { Select , Option} from 'element-ui';
Vue.config.productionTip = false
Vue.use(Select).use(Option)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
