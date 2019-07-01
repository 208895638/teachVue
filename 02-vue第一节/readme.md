## vue起步
###  vue简介
Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习
，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用
### vue使用
> 引入vue
 1. [开发版本](https://cdn.jsdelivr.net/npm/vue/dist/vue.js)  包含完整的警告和调试模式
 2. [生产版本](https://cdn.jsdelivr.net/npm/vue) 删除了警告，33.30KB min+gzip
> vue 常用指令 {{}} 、 v-text 、 v-html 、 v-show 、 v-if v-else-if v-else 、 v-for 、 v-bind 、v-once 、 v-model
**下面所有的例子必须在引入vue的前提下才能运行**

1. {{ }} 用来插入文本内容
```
<div id="app">
    <div>
        {{  name }}    
    </div>
</div>
<script>
    var vm = new Vue({
        el : "#app", // 需要挂载到某个元素上
        data(){ // 数据仓库
            return {
                name : "王五1111"
            }
        }
    })
</script>
```
2. 指令  v-text v-html  
    + v-text是用于操作纯文本，它会替代显示对应的数据对象上的值。当绑定的数据对象上的值发生改变，插值处的内容也会随之更新。
    + v-html用于输出html，它与v-text区别在于v-text输出的是纯文本，浏览器不会对其再进行html解析，但v-html会将其当html标签解析后输出。
例 v-text 
```
<div id="app">
    <div v-text="name"></div>
</div>
<script>
    var vm = new Vue({
        el : "#app", // 需要挂载到某个元素上
        data(){ // 数据仓库
            return {
                name : "王五1111"
            }
        }
    })
</script>
```
例 v-html
```
 <div id="app">
    <div v-html="name"></div>
</div>
<script>
        var vm = new Vue({
            el : "#app", // 需要挂载到某个元素上
            data(){ // 数据仓库
                return {
                    name : "<span>王五</span>"
                }
            }
        })
    </script>
```
3. 指令v-show 控制元素的显示和隐藏  特点是vue在渲染有v-show的节点时这个节点的样式为display:none v-if 也是控制元素的显示和隐藏 如果隐藏的话在页面里面这个节点是不会渲染的
+ 例 v-if v-show 
```
<div id="app">
      {{ name }}
      <div v-if="isShow">age : {{ age }}</div>
      <div v-show="isShow">age : {{ age }}</div>
    </div>

    <script>
      var vm = new Vue({
        el: "#app",
        data() {
          return {
            name: "王五",
            age: 30,
            isShow: false
          };
        }
      });
    </script>
```
![结果](https://raw.githubusercontent.com/208895638/teachVue/master/%E6%88%AA%E5%9B%BE/v-if%20v-show%E7%9A%84%E5%8C%BA%E5%88%AB.jpg "v-if和v-show的区别")
4. v-if v-else-if v-else vue的条件语句
```
<div id="app">
        <div v-if="age>30">
            {{ name }}
        </div>
        <div v-else-if="age == 30">
            {{ name2 }}
        </div>
        <div v-else>
            {{ name1 }}
        </div>
    </div>

    <script>
      var vm = new Vue({
        el: "#app",
        data() {
          return {
            name: "王五",
            name1: "李四",
            name2:"张三",
            age: 30,
            isShow: false
          };
        }
      });
    </script>
```
5. v-for 循环一个数组  里面两个属性 一个ele 一个index ele是每个对象  index是每个下标 用v-for的时候必须有一个key 这个key是唯一的
    ```
     <ul>
            <li v-for="(item , index) in list" :key="item.id">
                {{ item.title }}
            </li>
        </ul>
         var vm = new Vue({
        el: "#app",
        data() {
          return {
            list:[
                {
                    name : '张三',
                    id:1
                },
                {
                    name : '李四',
                    id:1
                },
                {
                    name : '王五',
                    id:1
                }
            ]
          };
        }})
    ```
6. v-bind 绑定一个属性   v-bind可以去掉 直接用一个:表示
    ```
        <h2 v-bind:title="title">
            我是标签
        </h2>
    ```
7. v-once只在页面里面渲染一次 