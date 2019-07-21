<template>
  <div id="app">
  <van-button type="primary" @click="showPopup">
    展示弹出层
  </van-button>

  <van-popup position="bottom" v-model="show">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
    />
  </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
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
