<template>
  <div class="home">
    {{ $store.state.area }}
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click="update">
      {{ name }} {{ age }}
    </div>
    <div @click="$store.commit('events',{
      num:5,
      name:'李四'
    })">
      {{ num }}
      <button @click="$store.state.area = '苏州'">
        改变
      </button>
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
    }
  },
  methods: {
    update(){
      //this.$store.state.age = 100;  // 不规范 不利于团队的协作
      //this.$store.commit("updates");  // 提交mutation的
      this.$store.dispatch('syncUpdate')  // 提交action
    }
  },
  computed: {
    age(){
      console.log(this.$store);
      return this.$store.state.age;
    },
    name(){
      return this.$store.state.name;
    },
    num(){
      return this.$store.state.num;
    }
  }
}
</script>
