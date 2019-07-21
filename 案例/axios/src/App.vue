<template>
  <div id="app">
    <div class="top">
      <label for="">请输入用户id<input type="text" v-model="id"/></label>
      <button @click="get">查询</button><button @click="isMaskShow = true;isAddShow = true;">添加</button>
    </div>
    <div class="main">
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <th>id</th>
          <th>地址</th>
          <th>添加时间</th>
          <th>学校</th>
          <th>性别</th>
          <th>名称</th>
          <th>电话号码</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in list" :key="item.id" @dblclick="update(item)">
          <td>{{ item.id }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.addTime }}</td>
          <td>{{ item.school }}</td>
          <td>{{ item.sex | sexs }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
    <div class="foot">
      <div>
        总数{{ total }}
        <select name="" id="" v-model="limit" @change="init">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div>
        <button v-for="item in totalPage" @click="toStart(item)" :key="item">
          {{ item }}
        </button>
        
      </div>
    </div>
    <div class="mask" v-if="isMaskShow">
      <ul >
        <li>
          <label for="">
            请输入地址
            <input type="text" v-model="item.address"
          /></label>
        </li>
        <li>
          <label for="">
            请输入学校
            <input type="text" v-model="item.school"
          /></label>
        </li>
        <li>
          请输入性别
          <label for=""
            ><input type="radio" v-model="item.sex" value="0" name="sex" />
            男 </label
          ><label for=""
            ><input type="radio" v-model="item.sex" value="1" name="sex" />
            女
          </label>
        </li>
        <li>
          <label for="">
            请输入名称
            <input type="text" v-model="item.name"
          /></label>
        </li>
        <li>
          <label for="">
            请输入电话号码
            <input type="text" v-model="item.tel"
          /></label>
        </li>
        <li>
          <label for="">
            请输入年龄
            <input type="text" v-model="item.age"
          /></label>
        </li>
      </ul>
      <div>
        <button v-if="isAddShow" @click="add">添加</button>
        <div v-else>
          <button @click="updates">
            修改
          </button>
          <button @click="del">
            删除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      start: 1,
      limit: 5,
      id: "",
      total: 20,
      totalPage: 5,
      list: [],
      isMaskShow:false,
      isAddShow:true,
      item:{
        address:"",
        school:"",
        sex:"",
        name:"",
        tel:"",
        age:""
      }
    };
  },
  filters: {
    sexs(val){
      if(val == 0){
        return "男"
      }else if(val == 1){
        return "女"
      }else{
        return "不男不女"
      }
    }
  },
  methods: {
    updates(){

      this.$ajax.post("/api/ajax/user/update",this.item)
      .then(res => {
        alert("修改" + res.data.code);
        console.log(res ,222);
         this.isMaskShow = false;
         this.init();
      })
    },
    del(){
      console.log(this.item,555)
      this.$ajax.get(`/api/ajax/user/del?id=${this.item.id}`)
      .then(res => {
        alert("删除" + res.data.code);
        console.log(res ,222);
         this.isMaskShow = false;
          this.init();
      })
    },
    update(val){
      this.isMaskShow = true;
      this.isAddShow = false;
      this.item = val;
    },
    add(){
      this.$ajax.post("/api/ajax/user/save",this.item)
      .then(res => {
        alert(res.data.code);
        console.log(res ,222);
        this.isMaskShow = false;
        this.init();
      })
    },
    toStart(val) {
      this.start = val;
      this.init();
    },
    get() {
      this.$ajax.get(`/api/ajax/user/detail?id=${this.id}`).then(res => {
        console.log(res, 1111);
        var msg = res.data.data;
        this.list = [msg];
      });
    },
    init() {
      this.$ajax
        .get(`/api/ajax/user/list?start=${this.start}&limit=${this.limit}`)
        .then(res => {
          var msg = res.data.data.list;
          this.list = msg;
          this.total = res.data.data.totalRow;
          this.totalPage = res.data.data.totalPage;
        });
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
.top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input,
  button {
    margin: 0 10px;
  }
}
.main {
  width: 100%;
  table {
    width: 100%;
    td,th{
      padding: 10px;
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  li{
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input{
      margin-left: 5px;
    }
  }
}
</style>

