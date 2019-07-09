<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name : 'home'}" exact>首页</router-link>
    <button @click="back">back</button>
  </div>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
.r-active{
  color: red!important;
}
</style>
