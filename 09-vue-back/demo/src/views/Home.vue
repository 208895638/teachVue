<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png">
    
    <router-link :to="`/info?id=${id}&name=2`">跳转到详情页</router-link>
    <router-link to="/infos/2">跳转到详情页infos</router-link>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      id:2
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 900px;
  background: red;
}
</style>
