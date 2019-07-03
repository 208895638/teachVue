<template>
  <div>
    <router-link to="/" exact>跳转到首页</router-link>
    <router-link to="/mine/1" exact>跳转到mine页</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
.router-link-active{
  color: red;
}
</style>

