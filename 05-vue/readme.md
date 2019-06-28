### 插槽
   Vue 实现了一套内容分发的 API，将 <slot> 元素作为承载分发内容的出口。
   插槽主要用作向组件里面插入东西 
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
> 具名插槽
 用于标记往哪个具名插槽中插入子组件内容。
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
            
            <template v-slot:default="slotProps">
                {{ slotProps.user.age }}  {{ slotProps.info }}
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
                    data(){
                        return {
                            user:{
                                name : "张三",
                                age : 40
                            },
                            info:"111"
                        }
                    },
                    template:`
                    <div class="container">
                        {{ user.name }} <slot :user="user" :info="info"></slot>
                    </div>
                    `
                }
            }
        })
    </script>
</body>
</html>
```
> 动态组件 
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
        <component v-bind:is="com"></component>
        <button @click="com = 'com1'">
            切换组件
        </button>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data () {
                return {
                    info:1,
                    com:"com"
                }
            },
            components: {
                "com" : {
                    template:`
                    <div>组件1</div>
                    `
                },
                "com1" : {
                    template:`
                    <div>组件2</div>
                    `
                },
            }
        })
    </script>
</body>
</html>
```