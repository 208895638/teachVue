<template>
  <div id="app">
    <transition name="left">
      <router-view  class="main"/>
    </transition>
    
    <div id="nav" v-if="$route.meta.footShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div>
</template>

<style lang="scss">
body,html{
  width: 100%;
  height:100%;
}
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
.left-enter{
  transform: translateX(100%);
}

.left-enter-active{
  transition: .3s ease-in;
}
#app{
  height:100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow: auto;
  }
  #nav{
    border-top: 1px solid #ccc;
  }
}
</style>

