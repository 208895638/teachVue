## 组件开始
### 组件简介
   组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。
> 组件注册  组件分为全局组件和局部组件 
1. 全局注册  全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
```
 <div id="app">
        <com></com>
    </div>
    <script>
        // 全局组件
        Vue.component("com",{
            data(){
                return {
                    num : 10
                }
            },
            template:"<h2>{{ num }}</h2>"
        })
        var vm = new Vue({
            el : "#app"
        })
    </script>
```
2. 局部注册 只能在当前页面中使用
```
 <div id="app">
            <com></com>
            <com1></com1>
    </div>
    <script>
        // 局部注册组件
        
        var vm = new Vue({
            el : "#app",
            components: {
                "com":{
                    data () {
                        return {
                            info:"我是局部注册的组件"
                        }
                    },
                    template:"<h3>{{ info }}</h3>"
                },
                "com1":{
                    data () {
                        return {
                            info:"我是局部注册1的组件"
                        }
                    },
                    template:"<h3>{{ info }}</h3>"
                }
            }
        })
    </script>
```
> 组件的大小写问题 
在dom里面是不识别大写的 浏览器会把  如果要识别的话需要用-连接 如

> 组件的特点
 组件之间的数据是不相通的
> 组件传值 通过props传值 这个props是写在我们组件里面的一个属性 传值通过这个属性来传值的
```
<div id="app">
        <is-show prop1="'父组件传递的数据'" :parinfo="parinfo"></is-show>
    </div>
    <script>
        // 局部注册组件
        
        var vm = new Vue({
            el : "#app",
            data(){
                return {
                    parinfo:"我是父组件的数据"
                }
            },
            components: {
                "is-show":{
                    props:[
                        "prop1",
                        "parinfo"
                    ],
                    data () {
                        return {
                            info:"我是局部注册的组件"
                        }
                    },
                    template:"<h3>{{ info }} {{ prop1 }} {{ parinfo }}</h3>"
                }
            }
        })
    </script>
```
> props类型  有八种类型
作用就是对我们传递的数据进行类型检查 
1. String
2. Number
3. Boolean
4. Array
5. Object
6. Date
7. Function
8. Symbol
> 单向数据流 父级 prop 的更新会向下流动到子组件中，但是反过来则不行 如果我们实在想改变这个传值 我们用data或者计算属性来代替这个传值
```
 components: {
                "is-show":{
                    // props:[
                    //     "prop1",
                    //     "parinfo",
                    //     "list"
                    // ],
                    props:{
                        parinfo:Boolean
                    },
                    data () {
                        return {
                            info:"我是局部注册的组件",
                            infos : this.parinfo
                        }
                    },
                    methods: {
                        changeParent(){
                            this.infos = !this.infos;
                        }
                    },
                    template:`<div>
                                <h3> {{ infos }}</h3>
                                <button @click="changeParent">改变父元素传值</button>
                            </div>`
                }
            }
```
> 子组件向父元素传递值  这个是通过自定义事件来完成的
首先子组件向父元素传递事件  然后在这个子组件名称里面响应这个事件  在父元素的事件里面绑定这个事件 这个就是子组件向父元素进行传值
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
            {{  childInfo }}
        <is-show  :parinfo="parinfo" @childevents="parEvents"></is-show>
    </div>
    <script>
        // 局部注册组件
        
        var vm = new Vue({
            el : "#app",
            data(){
                return {
                    parinfo:"我是父组件的数据",
                    childInfo:""
                }
            },
            methods:{
                parEvents(val){
                    this.childInfo = val;
                    console.log("我是子组件传递过来的数据",val)
                }
            },
            components: {
                "is-show":{
                    props:[
                        "parinfo"
                    ],
                    data () {
                        return {
                            info:"我是局部注册的组件"
                        }
                    },
                    methods: {
                        mes(){
                            this.$emit("childevents",this.info)  //  @childevents="parEvents"
                            console.log("我是子组件里面的事件",this)
                        }
                    },
                    template:"<h3 @click='mes'>{{ info }} {{ parinfo }}</h3>"
                }
            }
        })
    </script>
</body>
</html>
```

> 子组件与子组件进行通信  通过bus传递  首先子组件传递事件名称  另外一个组件在生命周期函数中响应这个事件
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
        <zujian1 :mes="childInfo"></zujian1>
        <zujian2 @event="parEvents"></zujian2>
    </div>
    <script>
        // 局部注册组件   bus 
        var bus = new Vue();
        var vm = new Vue({
            el : "#app",
            data(){
                return {
                    parinfo:"我是父组件的数据",
                    childInfo:""
                }
            },
            methods:{
                parEvents(val){
                    this.childInfo = val;
                    console.log("我是子组件传递过来的数据",val)
                }
            },
            components: {
                "zujian1": {
                    props:["mes"],
                    data(){
                        return {
                            get1:""
                        }
                    },
                    created () {
                        var that = this;
                        var mess =  bus.$on("busevent",val=>{
                                console.log(that , this);
                                this.get1 = val;
                                //return val
                            });
                    },
                    // computed: {
                    //     getMes(){
                    //        var mess =  bus.$on("busevent",function(val){
                    //             console.log(val,"接收的数据");
                    //             return val
                    //         });
                    //         return mess
                    //     }
                    // },
                    template :"<h3>组件 传递过来的值是{{ mes }} {{ get1 }}</h3>"
                },
                "zujian2": {
                    data(){
                        return {

                        }
                    },
                    methods:{
                        post2(){
                            //this.$emit("event",1)
                            bus.$emit("busevent",1);
                        }
                    },
                    template :"<h3 @click='post2'>组件2传递数据</h3>"
                },
            }
        })
    </script>
</body>
</html>
```
> 生命周期 beforeCreated created beforeMounted mounted beforeUpdate update beforeDestroy destroy
1. 生命周期里面常用的两个生命周期钩子  一个是created 一个是mounted
2. created和mounted的区别是一个不可以操作dom 一个可以操作dom  这个created我们用引入vue的方式是可以的  但是在vue-cli中是不可以的

> .sync 修饰符  我们可以对我们传入的数据进行更改 写法是在我们需要给组件传递的数据加一个.sync  在更改的时候传一个 this.$emit("update:+我们接收的属性");
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
        <com :message.sync= "mes"></com>
    </div>
    <script>
        var vm = new Vue({
            el : "#app",
            methods: {
                
            },
            data(){
                return {
                    mes : "父元素里面的值"
                }
            },
            components: {
                "com":{
                    props: ["message"],
                    template:"<h3 @click='changeProp'>子组件 {{message}}</h3>",
                    methods:{
                        changeProp(){
                            //this.message = "改变之后的";
                            this.$emit('update:message', "改变之后的")
                            //this.$emit("undate:message","改变之后的")
                        }
                    }
                }
            }
            
        })
    </script>
</body>
</html>
```