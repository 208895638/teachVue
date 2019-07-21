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
export default {
  created () {
    // this.$ajax.get("/api/douban/movie/in_theaters")
    // .then(res=>{
    //   console.log(res)
    // })
    var obj = {
      name:"王五",
      age:"123",
      sex:"",
      tel:"",
      address:"",
      school:"",
    }
    this.$ajax.post("api/ajax/user/save",obj)
    .then(res => {
      console.log(res,222)
    })
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
