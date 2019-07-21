import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input ,Col , Row ,Form ,FormItem  ,Button } from "element-ui";
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(Input).use(Col).use(Row).use(Form).use(FormItem).use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
