## vue
> computed 在vue中一些数据经常依赖于别的数据做出改变，且改变的逻辑也较复杂，这个时候就需要用到计算属性computed。通俗来说就是当前数据不是确定的，要经常做出改变，而这个改变是其他数据改变导致的。只要在它的函数里引用了 data 中的某个属性，当这个属性发生变化时，函数仿佛可以嗅探到这个变化，并自动重新执行。
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
            {{ info }} 反转的{{ reverseMessage }} 
            <ul>
                <li v-for="(item , index) in lists" :key="item.id">
                    {{ item.name }} {{ item.age }}
                </li>
            </ul>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    info : "true1",
                    list:[
                        {
                            name:"张三",
                            id :1
                        },
                        {
                            name:"李四",
                            id :2
                        },
                        {
                            name:"王五",
                            id :3
                        },
                    ]
                }
            },
            computed:{
                reverseMessage(){
                    return this.info.split("").reverse().join("");
                },
                lists(){
                    var arrs = this.list.map(ele =>{
                        ele.age = 40;
                        return ele
                    })
                    return arrs;
                }
            }
        })
    </script>
</body>
</html>
```
> 侦听器 watch 用途就是监听某个数据的变化 对这个数据的变化执行一些方法
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <input type="text" v-model="message">
           {{ message }}
    </div>
    <script>
        var message = 11
        var vm = new Vue({
            el:"#app",
            watch: {
                // 如果 `question` 发生改变，这个函数就会运行
                message: function (newQuestion, oldQuestion) {
                    console.log("newQuestion" ,newQuestion )
                    console.log( "oldQuestion" ,oldQuestion)
                    //this.message = this.message ++ ;
                }
            },
            data(){
                return {
                    num : 10,
                    message
                }
            }
        })
    </script>
</body>
</html>
```
+ 计算属性和侦听器主要的区别
计算属性顾名思义就是通过其他变量计算得来的另一个属性,另外，计算属性具有缓存。计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。

而侦听器watch是侦听一个特定的值，当该值变化时执行特定的函数。例如分页组件中，我们可以监听当前页码，当页码变化时执行对应的获取数据的函数。
> vue事件  可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
1. 写法是v-on:["click","mouseover"] = "在这个引号里面执行一些表达式"
```
 <div id="app">
           <div v-on:mouseover=" num ++ ">
                点我加1
           </div>
           {{ num }}
    </div>
```
 2. 在vue的实例类下面新建一个methods 这个methods存放的是我们的事件方法 
 ```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <div v-on:click=" add(2) ">
                点我加1
           </div>
           {{ num }}
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    num : 10
                }
            },
            methods: {
                add(val){
                    this.num = this.num + val;
                }
            }
        })
    </script>
</body>
</html>
 ```
3. 事件修饰符 .prevent(阻止默认事件) .stop(阻止事件冒泡) .once(只触发一次)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
    <style>
    .box{
        width: 200px;
        height: 200px;
        background: red;
    }
    .child{
        width: 100px;
        height: 100px;
        background: blue;
    }
    </style>
</head>
<body>
    <div id="app">
          <div class="box" @click.once="parentEvents">
                <div class="child" v-on:click.stop="childEvents">
                    
                </div>
          </div>
          <a href="https://www.baidu.com" v-on:click.prevent="prents">跳转百度</a>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    num : 10
                }
            },
            methods: {
                prents(){

                },
                parentEvents(){
                    this.num ++ ;
                    alert(this.num);
                },
                childEvents(){
                    alert('我是子级');
                },
                add(val){
                    this.num = this.num + val;
                }
            }
        })
    </script>
</body>
</html>
```
4. vue事件的简写 v-on:click 简写为@click
5. 系统修饰符(按键) alt shift delete 空格等 用法是比如有一个点击事件 我们直接在后面加上我们需要的系统修饰符
```
<div @click.alt="alert('alt按键执行了!')">Do something</div>
```
### 操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。
> class绑定  
1. 三元运算符 
```
    <div id="app">
      <div :class=" num <= 10 ? 'on' : 'green'">
        1234
      </div>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                num : 9
            }
        }
      });
    </script>
```
![结果](https://raw.githubusercontent.com/208895638/teachVue/master/%E6%88%AA%E5%9B%BE/%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6.jpg "三元运算符渲染class类名")
2. 对象写法  :class = 第一个参数是需要绑定的class名称 第二个参数是一个表达式或者布尔值
```
<div v-bind:class="{ green: isActive }">class绑定</div>
<script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                isActive : true
            }
        }
      });
    </script>
```
![对象写法截图](https://raw.githubusercontent.com/208895638/teachVue/master/%E6%88%AA%E5%9B%BE/%E7%BB%91%E5%AE%9Aclass%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%86%99%E6%B3%95.jpg "对象写法截图")
3. 数组写法
```
<div v-bind:class="[activeClass, errorClass]">数组绑定class</div>
 data(){
    return {
        num : 10,
        isActive : true,
        className : "on",
        activeClass : "on",
        errorClass : "green"
    }
},
```
> 内联样式绑定 写法 :style是需要绑定的属性 里面用个大括号装载我们需要写的样式 
```
这个是加引号的
<div :style="{color : 'green'}">
    内联样式
</div>
这个是不加引号的 
    <div :style="{color : red}">
        内联样式
    </div>
    <script>
        var vm = new Vue({
        el: "#app",
        data(){
            return {
                isActive : true,
                red:"red"
            }
        }
        });
    </script>
```
