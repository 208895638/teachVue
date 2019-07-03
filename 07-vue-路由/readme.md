## vue路由
### 路由简介

> Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。我们用vue-cli开发的项目就是单页面应用。
> vue路由能实现哪些功能
+ 嵌套的路由/视图表
+ 模块化的、基于组件的路由配置
+ 路由参数、查询、通配符
+ 基于 Vue.js 过渡系统的视图过渡效果
+ 细粒度的导航控制
+ 带有自动激活的 CSS class 的链接
+ HTML5 历史模式或 hash 模式，在 IE9 中自动降级
+ 自定义的滚动条行为
### 路由安装 (我们在vue-cli创建项目的时候就默认安装路由)

### npm安装vue路由
> 这一步是安装路由 保存到我们package.json 里面的dependencies里面
```
npm install vue-router --save
```
> 安装完成之后我们得引入这个路由(你安装不引入 这个项目也不知道你使用了路由)
引入方法 [官方文档](https://router.vuejs.org/zh/installation.html "引入路由")
```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
> 上面就代表路由引入成功 引入成功之后我们得使用 使用方法 
1. 在main.js的同级目录新建一个router的文件夹(这个文件夹存放的是我们路由的配置文件)
2. 在这个文件夹下创建index.js 里面写上
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 上面三个是引入vue-router
export default new Router({  // 把我们的路由配置文件暴露出去
  mode: 'history', 
  // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。如果不想/// 要很丑的 hash，我们可以用路由的 history 模式
  routes: [  // 这个存放的是我们路由的配置文件
    
  ]
})

```
3. 在view目录下新建两个文件夹 一个是index 一个是mine 这个文件夹代表两个页面  一个是index页面 一个是mine页面 分别在mine和index下面新建index.vue (创建我们的组件) 里面分别写上内容 '首页' 'mine页'
