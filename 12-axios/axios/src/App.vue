<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="posts">提交数据</button>
    <router-view/>
  </div>
</template>
<script>
import axios from "axios";
import { Loading } from 'element-ui';
import qs from "qs"
var loadings ;
axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.timeout = 5000;
axios.interceptors.request.use(function (config) {
    // 在发起请求请做一些业务处理  
    // 如开启loading  对请求的参数做处理 添加token等
    // 例  在请求的时候开启elementui的loading
  // loadings = Loading.service({ fullscreen: true });
  // if(config.method == "post"){
  //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // }
  config.data = qs.stringify(config.data);
  console.log(config,222)
  // console.log(config)
  loadings = Loading.service(); // elementui的loading
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
axios.interceptors.response.use(function (config) {
    // 在请求之后做处理 如关闭loading
  //loadings.close();
  loadings.close()
    return config;
}, function (error) {
    // 对请求失败做处理
    loadings.close()
    //loadings.close();
    return Promise.reject(error);
});
export default {
  methods: {
    posts(){
      axios.all([this.func1()  ])
      .then(res=>{
        console.log(res)
      })
    },
    func1(){
      var params = {
        name:"赵四",
        age:"30",
        sex:"0",
        tel:"123",
        address:"地址",
        school:"河南"
      }
      var func1 = axios.post("/main",params) 
      return func1
    },
    func2(){
      var params = {
        name:"王五",
        age:"30",
        sex:"0",
        tel:"123",
        address:"地址",
        school:"河南"
      }
      var func1 = axios.post("http://59.110.138.169/api/ajax/user/save",qs.stringify(params)) 
      return func1
    }
  },
  created () {
    
    ///axios.get("http://59.110.138.169/api/douban/movie/in_theaters")
    // get传值第一种写法
    //axios.get(`http://59.110.138.169/api/douban/movie/in_theaters?start=${2}&limit=${5}`)
    // get请求的第二种写法
    // axios.get(`http://59.110.138.169/api/douban/movie/in_theaters`,{
    //   params:{
    //     start:1,
    //     limit:10
    //   }
    // })
    // 请求localhost:3000 的地址
    //axios.post("http://localhost:3000/main") 

    // post请求附带参数
    // var para = qs.stringify({
    //   username:'张三',
    //   age:40
    // })
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
