## vue 回顾
### 简介
从传统意义上说，路由就是定义一系列的访问地址规则，路由引擎根据这些规则匹配
找到对应的处理页面，然后将匹配到的页面返回。可以说所有的后端开发都是这样
做的，而前端路由是不存在“请求” 说的。前端路由是直接找到与地址匹配的组件
或对象并将其渲染出来。
改变浏览器地址而不向服务器发出请求有两种做法 
一是在地址中加入＃以欺骗浏览器 ，地址的改变是由于正在进行页内导航 。
二是使用 HTML5的window. history 功能，使用 history api 来模拟一个完整的 URL
将单页程序分割为各自功能合理的组件或者页面，路由起到了一个非常重要作用
就是连接单页程序中各页面之间的链条
### 安装 
> 安装router 
 ```
 npm i vue-router --save
 ```

### 准备工作
单页式应用是没有“页 ”的概念的， 更准确地说 vue.js 是没有页面这个概念的， Vue
的容器就只有组件。但我们用router 配合组件又会重新形成各种的“页”，那么我们可
以这样来约定和理解
1. 页面是一个抽象的逻辑概念 用于划分功能场景
2. 组件是页面在 Vue 的具体实现方式。

### 配置路由文件
1. 在main.js的同级目录新建一个router的文件夹(这个文件夹存放的是我们路由的配置文件)
2. 在这个文件夹下创建index.js 里面写上
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 上面三个是引入vue-router(你安装路由之后不引入相当于做无用功)
export default new Router({  // 把我们的路由配置文件暴露出去
  mode: 'history', 
  // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。如果不想/// 要很丑的 hash，我们可以用路由的 history 模式
  routes: [  // 这个存放的是我们路由的配置文件
    
  ]
})

```
3. 在view目录下新建两个文件夹 一个是index 一个是mine 这个文件夹代表两个页面(这个一个规范)  一个是index页面 一个是mine页面 分别在mine和index下面新建index.vue (创建我们的组件) 里面分别写上内容 '首页' 'mine页'
![项目结构]("https://raw.githubusercontent.com/208895638/teachVue/master/%E6%88%AA%E5%9B%BE/vue%E7%9B%AE%E5%BD%95%E6%88%AA%E5%9B%BE.jpg" "项目结构")
4. 在我们的router文件夹下的index.js里面引入我们的组件
```
import index from "@/views/index/index" // 引入index组件
import mine from "@/views/mine/index" // 引入mine组件
```
5. 配置基本路由

```
export default new Router({
  mode: 'history',  // 启用history路由
  routes: [ // 这里面是路由的配置项
    {
      path: '/',  // 这个是我们访问浏览器的地址
      name: 'index',  // 这个是我们给路由起的名称
      component: index  // 这个是 地址对应的组件
    },
    {
      path: '/mine', // 这个是我们访问浏览器的地址
      name: 'mine',  // 这个是我们给路由起的名称
      component: mine  // 这个是 地址对应的组件
    }
  ]
})
```
6. 上一步就代表路由配置完成 我们需要把我们的路由配置挂载到我们的vue实例上 在main.js里面操作
```
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  // 引入我们刚刚配置的路由文件
Vue.config.productionTip = false
new Vue({
  router, // 把路由挂载到vue实例上
  render: h => h(App)
}).$mount('#app')
```
7. 最后一步 在我们的app.vue里面加一个组件router-view
```
<router-link to="/">跳转到首页</router-link>
<router-link :to="{path:'/'}">跳转到首页</router-link>
    <router-link to="/mine">跳转到mine页</router-link>

    <router-view></router-view>
```
router-view这个组件是一个容器 我们页面的路由所对应的组件都渲染在这个容器里面
router-link是在vue里面做跳转链接用的 vue会把router-link渲染成a标签

### 路由的模式 mode
> history 依赖 HTML5 History API 和服务器配置。
> Hash 使用 URL hash 值来作为路由。支持所有浏览器，包括不支持 HTML5 History
API 的浏览器
### vue-router内置标签 
> router-view 渲染路径匹配到的视图组件，它还可以内嵌自己的 router-view
根据嵌套路径渲染嵌套组件
> router-link 支持用户在具有路由功能的应用中（ 点击）导航。

### 重定向  把地址重定向到某个路由 重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```
### 传递参数的方式
> query vue-router 可以让我们使用"/path？key=value"的方式，也就是俗称的查询字符串 (Query string )传递数据 如果要
$router 中读取参数，可以使用 $router.query. 参数名 的方式读取

> params 动态路由将参数作路由的习惯性做法是在路由后面以“参数＝值”的方式query传值，因为这种方式已经
非常过时与老旧，而且可读性极差，我们可以将参数融入到路由的路径定义之内成为路径一
部分，使之更具有可读性，我们称这种参数为“动态路径参数”，具体的做法是在参数
名之前加上 “：”，然后将参数写在路由的 path 内
```
path : "/mine/:id", // 动态路由
```
> 动态路由缺陷
当使用路由参数时，例如从`/books/1` 导航到 `books/2` ，原来的组件实例会
被复用。因为两个路由都渲染同一个组件，比起销毁 复用 显得更 高效。不过，
这也意味着组件的生命周期钩子不会再被调用，也就是说 created mounted 等钩子函数
页面第二次加载时将失效。那么， 当复用组件时，想对路由参数的变化做出响应的话，就
需要在 watch 对象内添加对$route 对象变化的跟踪函数

1. 解决方法 watch监听
```
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```
2. 让组件不被复用 用key
3. 组件守卫
```
beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
```
### 嵌套式路由  嵌套路由就是在一个被路由过来的页面下可以继续使用路由，嵌套也就是路由中的路由的意思。
比如在vue中，我们如果不使用嵌套路由，那么只有一个`<router-view>`，但是如果使用，那么在一个组件中就还有`<router-view>`，这也就构成了嵌套。
```
{
      path: '/home',
      name: 'home',
      component: Home,
      //redirect:"/home/test",
      children:[
        {
          path: 'test',
          name: 'test',
          component: test,
        },
        {
          path: 'test',
          name: 'test',
          component: test,
        },
      ]
    },
```
### 切页动效

```
<transition :name="now">
        <router-view/>
      </transition>

watch: {
    "$route":function(to,from){
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length  
      this.now = toDepth < fromDepth ? 'right' : 'left'   // 2< 1 ? 进入动效(从左右到左) : 离开动效(从左到右)
    }
  }
  
.right-enter{
  transform:  translateX(-100%);
}
.right-enter-active{
  transition: .3s ease-in;
}
.left-enter{
  transform:  translateX(100%);
}
.left-enter-active{
  transition: .3s ease-in;
}
```
### 导航状态样式 
默认情况下当router- link对应的路由匹配成功时 就会自动设置 class 属性值为 router-link-active ，如
我们想要将“激活”状态样式类命名为 active ，可以通过 linkActiveClass:"active ",  属性进行设置。 在路由配置文件里面设置
> 精确匹配与包含匹配
1. 包含匹配
router-link添加激活状态样式类的默认依据是对 URL 地址的全包含匹配 举个
，如果 前的路径是/home ，那么 router-link to＝"/" 也会被匹配井设 css 类名
2. 想要链接使用“精确匹配模式”，则使用 exact 属性(只想匹配/home)。 router-link 添加一个属性exact

### 命名视图 过一个名称来标识一个路由

```
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
router.push({ name: 'user', params: { userId: 123 }})
```

### 编程式导航 除了使用 <router-link> 创建 a 标签来定义导航链接 我们还可以用js的方法跳转页面
```
// 字符串
router.push('/home')

// 对象
router.push({ path: '/home' })

// 不支持动态路由 如果想要支持的话需换种写法 用命名路由或者 router.push({ path: '/home/1' })
router.push({ path: '/home' ， params:{id : 1} })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' }})
```

```
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```

## 导航守卫
vue-router官方解释 导航”表示路由正在发生改变。 vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
理解: 导航守卫可以看做是 vue-router 的生命周期钩子 假设用户要查看个人信息(用户直接输入url进入个人信息页面) 如果没登陆是不是不让获取用户信息 但是用户已经进入了个人信息页面 这个导航守卫呢 就是帮助开发者处理这种事件
### 全局守卫(只要加了全局守卫，每次路由的跳转都要经过全局守卫，一般是用的都是前置守卫)
> 全局前置守卫  
```
router.beforeEach((to, from, next) => { 
    // 里面三个参数  to代表我们将要跳转的路径
    // from 代表从那个路径跳转过来 就是上一个路径
    // next代表 守卫可以通过next控制下一步的跳转 如果写了前置守卫 一定要添加next()到下一步 
    // 因为路由还没有跳转 next可以是路由跳转
    // 需要注意的是 如果当跳转的地址带参数的时候(动态路由) 跳转的时候就会忽略后面传递的参数 
    // 如 next({path:"/user",params:{id:1}})
    // 解决方法 换一种写法
    // next("/user/1") 或用命名路由的方式跳转next({name:"user",params:{id:1}})
  // ...
})
```
> 全局前置守卫应用场景(进入页面登录判断、管理员权限判断、浏览器判断等)

> 全局后置守卫(没啥用)
```
router.afterEach((to, from) => {   
  
})
```
### 路由守卫  运行在路由上的守卫  (相比上面的全局守卫 全局守卫是只要有跳转就会执行守卫函数 而路由守卫呢 是只有跳转到当前的守卫时才执行路由守卫函数) 用处做跳转判断
```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```
### 组件内的守卫 (也可以理解为这个组件的生命周期 与全局守卫使用方法一致)
> beforeRouteEnter 这个守卫不做什么操作 在这一步的时候this都还没有绑定到vue实例类上(组件实例还没有被创建) 也就是说在这一步我们还不能用this
> beforeRouteUpdate  (在组件复用的时候调用 用于解决组件复用问题)
> beforeRouteLeave (导航离开该组件的对应路由时调用 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。 还可以用来清除定时器)
```
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
```
```
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
### 路由元信息 在路由列表中，每个路由都有一个 meta 元数据字段， 我们可以在这里设置一些自定义信息，供页面组件或者路由钩子函数中使用。（如设置网页标题,设置某个页面是否需要登陆才能进入）
```
export default new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { title: true }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
```
### 滚动行为 （使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，这个时候就可以使用router的滚动行为）
> 理解 vue在页面切换的时候 比如a页面跳转到b页面的时候 滚动条的位置是保持不变的 跟传统路由切换页面相差很大 
如果要实现和前端路由一样的效果 这个时候就可以使用router提供的滚动行为 这个更好[vue-router官方issues](https://github.com/vuejs/vue-router/issues/2533 "官方issues") (浏览器后退时返回到顶部)
```
scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ x: 0, y: 0 })
        })
    })
    }
```
### 路由懒加载 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。简单的说就是：进入首页不用一次加载过多资源造成用时过长！！！
```
component:() => import( '@/view/mine/mine.vue')
```

###  登陆鉴权
在客户端发送账号密码到服务端，服务端验证成功后返回token存储用户的权限，前端用Cookie把token存储在本地，在路由跳转（router.beforeEach）中判断是否存在token，另外前端可以通过token请求服务端获取userInfo，在vuex中存储着用户的信息（用户名，头像，注册时间等等）。
