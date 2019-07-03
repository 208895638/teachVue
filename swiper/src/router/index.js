import Vue from 'vue'
import Router from 'vue-router'
import index from "@/views/index/index" // 引入index组件
import mine from "@/views/mine/index" // 引入mine组件
Vue.use(Router)

export default new Router({
  mode: 'history',  // 启用history路由
//   linkActiveClass:"r-active",
  routes: [ // 这里面是路由的配置项
    {
      path: '/',  // 这个是我们访问浏览器的地址
      name: 'index',  // 这个是我们给路由起的名称
      component: index  // 这个是 地址对应的组件
    },
    // {
    //   path: '/mine', // 这个是我们访问浏览器的地址
    //   name: 'mine',  // 这个是我们给路由起的名称
    //   component: mine  // 这个是 地址对应的组件
    // },
    {
        path : "/mine/:id", // 动态路由
        name : "mine" ,
        component: mine
    }
  ]
})
