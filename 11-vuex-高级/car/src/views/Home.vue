<template>
  <div class="home">
    <img :src="url" alt="">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>商品名称:{{ item.spName }}</div>  
        <div>商品价格:{{ item.spPrice }}</div> 
        <div>商品数量:{{ item.spNum }}</div> 
        <button @click="add(item.id)">添加进购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState , mapMutations } from "vuex"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      list:state => state.modulea.list,
      url:state => state.modulea.url
    })
  },
  methods: {
    ...mapMutations({
      add:"modulea/add"
    })
  },
  created () {
    console.log(this.$store)
  }
}
</script>
<style lang="scss" scoped>
.home ul li{
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

