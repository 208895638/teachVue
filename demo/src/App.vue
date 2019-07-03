<template>
  <div id="app">
    <div id="nav">
      <a1 ></a1>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about', params: { id: 123 }}">User</router-link>
      <h2>
        111
      </h2>
    </div>
    <router-view/>
  </div>
</template>
<script>
import a1 from "./components/a"; // .js / .vue 

export default{
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  created () {
    
  },
  components: {
    a1
  }
}
// import {str , fuc} from "./exports.js";
// console.log(str,fuc ,"111111")
// import imgs from "./assets/logo.png"; // 这个图片能导入是webpack帮我们做的
// console.log(imgs);
//import csss from "@/assets/a.css";  // @是webpack帮我们事先定义好的处理路径的符号 它以src目录为根目录
//  export export default 这俩导出都是导出一个对象 
// export 导出的变量 我们在引入的时候必须和export导出的结构一样
//export { a, b}  导入的时候 import {a,b} 名称也必须一样
// export default 导出的对象 我们在导入的时候机构不需要相同
//export default {a,b} import 导入的时候 直接写个名称 这个名称就代表这个对象{a,b}
</script>
<!-- scoped可以吧我们写的样式只作用与当前的组件 --> 
<style lang="scss" scoped>

h2{
      color: red;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav{
    
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!-- <style>
@import url("./assets/a.css");
</style> -->

