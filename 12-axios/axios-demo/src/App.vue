<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
   
  </div>
</template>
<script>
import api from "@/api"
//import axios from "axios";
//import qs from "qs";
//import { Loading } from 'element-ui';
//axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.timeout = 3000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let datas = {
        Mob:183111111112,
        validcode:"815961",
        use:"regiVali"
      };
// let params = qs.stringify(datas)
// axios.interceptors.request.use(function (config) {
//     // 在发起请求请做一些业务处理  
//     // 如开启loading  对请求的参数做处理 添加token等
//   loadings = Loading.service({ fullscreen: true });
//   console.log(config)
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     return config;
// }, function (error) {
//     // 对请求失败做处理
//     return Promise.reject(error);
// });
// axios.interceptors.response.use(function (config) {
//     // 在发起请求请做一些业务处理  
//     // 如开启loading  对请求的参数做处理 添加token等
//   loadings.close();
//     return config;
// }, function (error) {
//     // 对请求失败做处理
//     loadings.close();
//     return Promise.reject(error);
// });
export default {
  data () {
    return {
    }
  },
  methods: {
    init(){
      return api.get('/')
     
    },
    getUserInfo(){
       return this.$ajax.post('/user',datas  )
    }
  },
  created () {
    console.log(process.env.NODE_ENV)
    // if(process.env.NODE_ENV == "development"){
    //   axios.defaults.baseURL = 'http://localhost:3000';
    // }else{
    //   axios.defaults.baseURL = 'http://localhost:3001';
    // }
    // axios.all([this.getUserInfo()])
    // .then((val)=>{
    //     console.log(val)
    // });
    this.getUserInfo()
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
<style lang="scss" scoped>
.loading{
  position: fixed;
  top:0;
  left:0;
  bottom: 0;
  z-index: 999;
  background: rgba(000,000,000,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
  }

}
</style>
