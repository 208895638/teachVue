<template>
  <div class="about">
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>商品信息</th>
        <th>商品金额</th>
        <th>商品数量</th>
        <th>操作</th>
        <th>编辑</th>
      </tr>
      <tr v-for="item in carList" :key="item.id">
        <td><input type="checkbox" v-model="item.isChecked">{{ item.info.spName }}</td>
        <td>
          {{ item.info.spPrice }}
        </td>
        <td>
          {{ item.num }}
        </td>
        <td>
          <button @click="addCar(item.id)">+</button><button @click="delCar(item.id)">-</button>
        </td>
        <td @click="delItem(item.id)">删除</td>
      </tr>
    </table>
    <div class="bot">
      <label for=""><input type="checkbox" @click="allCheck" :checked = "isAllChecked">全选</label>
      <div>
        商品总金额 {{ allPrice }}元
      </div>
    </div>
    
  </div>
</template>
<script>
import { mapState , mapMutations ,mapGetters} from "vuex";
export default{
  computed: {
    ...mapState({
      carList:state => state.car.carList
    }),
    ...mapGetters ({
      isAllChecked:"car/isAllChecked",
      allPrice:"car/allPrice"
    })
  },
  methods: {
    ...mapMutations({
      addCar:"car/addCar",
      delCar:"car/delCar",
      delItem:"car/delItem",
      allCheck:"car/allCheck"
    })
  },
  created () {
    console.log(this.carList , 111)
  }
}
</script>

<style lang="scss" scoped>
table{
  width: 100%;
  th{
    background: #ccc;
  }
  td,th{
    padding: 10px;
    button{
      margin: 0 10px;
      width: 30px;
      height: 30px;
    }
  }
}
.bot{
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
}
</style>
