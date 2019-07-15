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
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.isChecked">{{ item.infos.spName }}</td>
        <td>{{ item.infos.spPrice }}</td>
        <td>{{ item.num }}</td>
        <td><button @click="add(item.id)">+</button><button @click="inc(item.id)">-</button></td>
        <td @click="del(item.id)">删除</td>
      </tr>
    </table>
    <div class="bot">
      <label for=""><input type="checkbox" @click="updateState" :checked="isSelectAll">全选</label>
      <div>
        商品总金额 {{ all }}元
      </div>
    </div>
    <!-- <ul>
      <li>
        <input type="checkbox">
        <div>
          商品名称
        </div>
        <div>
          数量
        </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
import { mapState , mapMutations , mapGetters } from "vuex"
export default {
  computed: {
    ...mapState({
      list:state => state.modulea.carList,
      isSelectAll : state =>{
        if(state.modulea.carList.length == 0){
          return false
        }else{
          return state.modulea.carList.every(ele => ele.isChecked == true)
        }
      }
    }),
    ...mapGetters({
      all:"modulea/all"
    })
  },
  methods: {
    ...mapMutations({
      updateState:"modulea/updateState",
      inc:"modulea/inc",
      add:"modulea/add",
      del:"modulea/del"
    })
  },
  created () {
    console.log(mapState({
      list:state => state.carList
    }))
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
