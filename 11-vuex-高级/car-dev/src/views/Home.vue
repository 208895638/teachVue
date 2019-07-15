<template>
  <div class="home">
    <ul>
      <li v-for="item in list" :key="item.id">
        <div>商品名称:{{ item.spName }}</div>  
        <div>商品价格:{{ item.spPrice }}</div> 
        <div>商品数量:{{ item.spNum }}</div> 
        <button @click="addCar(item.id)">添加进购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState , mapMutations} from "vuex"
export default{
  computed: {
    ...mapState({
      list:state =>  state.car.list
    })
  },
  methods: {
    ...mapMutations({
      addCar:"car/addCar"
    })
  },
  created () {
    console.log(this.list)
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

