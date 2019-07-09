import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/Home.vue"
import about from "@/views/About.vue"
import info from "@/views/info/index.vue"
import infos from "@/views/infos/index.vue"
Vue.use(Router)

export default new Router({ // 把我们的路由配置文件暴露出去
    mode: 'history', // history  hash
    linkActiveClass:"r-active",
    // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。如果不想/// 要很丑的 hash，我们可以用路由的 history 模式
    routes: [ // 这个存放的是我们路由的配置文件
        {
            path: "/",
            component: home,
            name:"home",
            //   redirect:"/about",
            meta: {
                footShow: true
            }
        },
        {
            path: "/about",
            component: about,
            meta: {
                footShow: true
            },
            beforeEnter: (to, from, next) => { 
                next()
                // ...
            }
        },
        {
            path: "/info",
            component: info,
            meta: {
                footShow: false
            },
            beforeEnter: (to, from, next) => { 
                next()
                // ...
            }
        },
        {
            path: "/infos/:name",
            component: infos,
            meta: {
                footShow: false
            }
        },
    ]
})