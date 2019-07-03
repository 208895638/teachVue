## 插槽
   Vue 实现了一套内容分发的 API，将 <slot> 元素作为承载分发内容的出口。
   插槽（Slot）是Vue提出来的一个概念，正如名字一样，插槽用于决定将所携带的内容，插入到指定的某个位置，从而使模板分块，具有模块化的特质和更大的重用性。
   插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制
### 插槽的用法
> 默认插槽
+ 插槽默认插入的位置
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="lib/vue.js"></script>
</head>
<body>
    <div id="app">
        <div>123</div>
        <com>
            <div>
                插入组件的标签
            </div>
            456
        </com>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            components: {
                "com" : {
                    template:"<h2>子组件<slot></slot></h2>"
                }
            }
        })
    </script>
</body>
</html>
```
+ 编译作用域
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
```
<div id="app">
        {{ red }}
        <com1></com1>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                isActive : true,
                red:"red"
            }
        },
        components: {
          com1 : {
            data(){
              return {
                info:"子组件内容"
              }
            },
            template:"<h2>我是子组件{{ info }} {{ red }}</h2>"    // Property or method "red" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.
          }
        }
      });
    </script>
```
+ 后备内容 它只会在没有提供内容的时候被渲染。
```
<div id="app">
        {{ red }}
        <com1></com1>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                isActive : true,
                red:"red"
            }
        },
        components: {
          com1 : {
            data(){
              return {
                info:"子组件内容"
              }
            },
            template:"<h2>我是子组件{{ info }}<slot>我是插槽的默认内容</slot></h2>"
            
          }
        }
      });
    </script>
```
> 具名插槽
 用于标记往哪个具名插槽中插入子组件内容。
 简单理解就是 给每一个 slot 一个name属性，
	父组件中 使用子组件标签时用的v-slot:name
	要跟子组件的name匹配上，才会渲染出来
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="lib/vue.js"></script>
</head>
<body>
    <div id="app">
        
        <com>
            <template v-slot:header>
                <h1>标题</h1>
            </template>
            <template v-slot:main>
                <h2>内容</h2>
            </template>
            <template v-slot:footer>
                <h3>底部内容</h3>
            </template>
        </com>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data () {
                return {
                    info:1
                }
            },
            components: {
                "com" : {
                    template:`
                    <div class="container">
                        <header>
                            <slot name="header"></slot>
                        </header>
                        <main>
                            <slot name="main"></slot>
                        </main>
                        <footer>
                            <slot name="footer"></slot>
                        </footer>
                    </div>
                    `
                }
            }
        })
    </script>
</body>
</html>
```
> 作用域插槽  用作访问我们组件里面的属性 
template内可以通过临时变量props来访问来自子组件插槽的数据msg
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="lib/vue.js"></script>
</head>
<body>
    <div id="app">
        <com :list = "list">
            <template v-slot:default="slotProps">
                <li @click="slotProps.item.age++">{{slotProps.item.name}}{{slotProps.item.age}}</li>
            </template>
        </com>
    </div>
    <script>
        var vm = new Vue({
            el : "#app",
            data(){
                return {
                    list:[
                        {
                            name:"张三",
                            age : 40
                        },
                        {
                            name:"李四",
                            age : 40
                        },
                    ]
                }
            },
            components: {
                com : {
                    props: ['list'],
                    data(){
                        return {

                        }
                    },
                    template:`
                        <ul><slot v-for="item in list" :item = "item"></slot></ul>
                    `
                }
            }
        })
    </script>
</body>
</html>
```
> 动态组件  让多个组件使用同一个挂载点(component)，并动态切换，这就是动态组件。
动态组件缓存
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    <style>
        .on{
            color: red;
        }
    </style>
  </head>
  <body>
    <div id="app">
        <ul>
          <li v-for="item in list" :key="item.name" @click="currentComponents = item.components">{{ item.name }}</li>
        </ul>
        <div class="box">
          <keep-alive>
              <component :is="currentComponents"></component>
          </keep-alive>
          
        </div>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                isActive : true,
                red:"red",
                currentComponents:"com1",
                list:[
                  {
                    name : "组件1",
                    components:"com1"
                  },
                  {
                    name : "组件2",
                    components:"com2"
                  },
                  {
                    name : "组件3",
                    components:"com3"
                  },
                ]
            }
        },
        components: {
          com1 : {
            data(){
              return {
                info:"组件1"
              }
            },
            template:"<p>{{ info }}</p>"
          },
          com2 : {
            data(){
              return {
                info:"组件2"
              }
            },
            template:"<p>{{ info }}</p>"
          },
          com3 : {
            data(){
              return {
                info:"子组件内容",
                nowIndex:100
              }
            },
            template:`
              <ul>
                <li @click="nowIndex = 1" :class="{on : nowIndex == 1}">张三</li>  
                <li @click="nowIndex = 2" :class="{on : nowIndex == 2}">李四</li>  
                <li @click="nowIndex = 3" :class="{on : nowIndex == 3}">王五</li>  
              </ul>
            `
          }
        }
      });
    </script>
  </body>
</html>

```

### 处理边界情况（一些特殊的情况的写法）
> vue中以$开头的是代表vue实例中所具有的属性或方法
> 访问元素 & 组件 

1. 访问根元素中的属性或方法
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    <style>
        .on{
            color: red;
        }
    </style>
  </head>
  <body>
    <div id="app">
        <com1></com1>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                rootInfo:"我是根元素的属性"
            }
        },
        methods: {
          alerts(){
            alert(111)
          }
        },
        components: {
          com1 : {
            data(){
              return {
                info:"组件1"
              }
            },
            template:"<p>{{ info }} <com2></com2></p>",
            components:{
              com2:{
                template:"<p>我是组件1的子组件</p>",
                created () {
                  console.log(this.$root.alerts())
                }
              }
            }
          }
        }
      });
    </script>
  </body>
</html>
```
2. 访问父元素的属性或方法 this.$parent
3. 访问子组件实例或子元素 this.$ref
4. X-Template 
```
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>
Vue.component('hello-world', {
  template: '#hello-world-template'
})
```
### vue提供的过渡效果  Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
> 单元素/组件的过渡 通过vue提供的组件transition来进行过渡
> 过渡的类名 
+ v-enter 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
+ v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
+ v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
+ v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
+ v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
+ v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
![图片示例](https://cn.vuejs.org/images/transition.png "图片示例")
+ 过渡小案例  元素高度的变化
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    <style>
        .on{
            color: red;
        }
        /* @keyframes fade{  // css3实现动画
          0% {
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
        p,h2{
          animation: fade .3s ease-in; 
        } */
        .fade-enter{
          color: green;
        }
        .fade-enter-active{
          opacity: 1;
          transition: all 2s ease;
        }
        .fade-enter-to{
          color: red;
        }
        .fade-leave{
          color: blue;
        }
        .fade-leave-active{
          opacity: 0;
          transition: all 2s ease;
        }
        .fade-leave-to{

        }
        .box{
          width: 100px;
          height: 100px;
          background: red;
        }
        h2{
          background: blue;
        }
        .hAuto-enter{
          height: 0;
        }
        .hAuto-enter-to{
          height: 100px;
        }
        .hAuto-enter-active,.hAuto-leave-active{
          transition: 5s ease-in;
        }
        .hAuto-leave{
          height: 100px;
        }
        .hAuto-leave-to{
          height: 0;
        }
    </style>
  </head>
  <body>
    <div id="app">
        <!-- <transition name="fade">
          <p v-if="isShow">
            元素1
          </p>
          <h2 v-else>
            元素2
          </h2>
        </transition> -->
        <button @click="isShow = !isShow">取反</button>
        <transition name="hAuto" mode="out-in">
            <div class="box" v-if="boxShow">

              </div>
              <h2 v-else>h2标签</h2>
        </transition>
        <button @click="boxShow = !boxShow">div动画</button>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                rootInfo:"我是根元素的属性",
                isShow:false,
                boxShow:true
            }
        },
        methods: {
          alerts(){
            alert(111)
          }
        },
        
      });
    </script>
  </body>
</html>

```
###  vue的可复用性与组合
> 混入 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    
  </head>
  <body>
    <div id="app">
        
    </div>
    <script>
      var objs = {
        el:"#app",
        data(){
          return {
            info:111
          }
        },
        created () {
          console.log("我是混入的对象!");
        }
      }
      //var vm = new Vue(objs);
      var vm = new Vue({
        mixins: [objs]
      });
    </script>
  </body>
</html>

```
### 自定义指令
常见的指令如 v-text v-model都是vue封装好的语法糖 
我们也可以封装自己的指令(用于对dom执行某些操作)
封装自己的指令是通过directives来执行的
1. 指令的常用的两个个钩子函数
bind指令第一次绑定到元素上执行的函数
inserted 指令插入到dom节点时执行的函数

2. 指令案例

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    
  </head>
  <body>
    <div id="app">
        <div  v-aa="'blue'">
          111
        </div>
    </div>
    <script>
      var objs = {
        el:"#app",
        data(){
          return {
            info:111
          }
        },
        created () {
          console.log("我是混入的对象!");
        },
        directives: {
          "aa":{
            bind(el,binding,vnode,oldVnode){  // 指令绑定到元素上的
              console.log(el,binding,vnode,oldVnode)
              el.style.color=binding.value
            },
            inserted(el,binding,vnode,oldVnode){  // 指令插入到元素上执行
              console.log(el,binding,vnode,oldVnode)
            }
          }
        }
      }
      //var vm = new Vue(objs);
      var vm = new Vue({
        mixins: [objs]
      });
    </script>
  </body>
</html>

```
3. 指令简写 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    
  </head>
  <body>
    <div id="app">
        <!-- <div  v-aa="'blue'">
          111
        </div> -->
        <!-- <div v-aaa>
          111
        </div> -->
        <input type="text" v-aaa v-if="isShow">
        <button @click="isShow = !isShow">
          取反
        </button>
    </div>
    <script>
      var that ;
      var vm = new Vue({
        el:"#app",
        data(){
          return {
            info:111,
            isShow:false
          }
        },
        created () {
          console.log("我是混入的对象!");
          that = this;
        },
        directives: {
          aaa(el){
              console.log(el,this,that);
               that.$nextTick(function(){
                el.focus()
                })
              // setTimeout(()=>{
              //   el.focus()
              // })
              
          }
        }
      });
    </script>
  </body>
</html>

```
### nextTick(function(){}) 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
### filter过滤器 对需要的数据进行过滤操作
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    
  </head>
  <body>
    <div id="app">
        <ul>
          <li v-for="item in list " :key="item.name">{{ item.name }}  {{ item.age }} {{ item.money | fil1 | fil }}</li>
        </ul>
    </div>
    <script>
      var that ;
      var vm = new Vue({
        el:"#app",
        data(){
          return {
            list:[
              {
                name : "张三",
                age : 40,
                money:100
              },
              {
                name : "王五",
                age : 20,
                money:200
              },
              {
                name : "李四",
                age : 30,
                money:300
              },
            ]
          }
        },
        filters:{
          fil1(val){
            return val*2
          },
          fil(val){
            console.log(val );
            return val+"元"
          }
        },
        created () {
          console.log("我是混入的对象!");
          that = this;
        },
        
      });
    </script>
  </body>
</html>

```





