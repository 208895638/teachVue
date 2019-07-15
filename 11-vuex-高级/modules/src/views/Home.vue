<template>
  <div class="home" @click="addNum">
  a =>{{ num1 }}  b=> {{ num }}   
  <hr>
  {{nums}}
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
  computed: {
    num(){
      return this.$store.state.moduleb.num
    },
    num1(){
      return this.$store.state.a.num
    },
    nums(){
      return this.$store.getters["a/addNums"]
    }
  },
  methods: {
    addNum(){
      //this.$store.commit("moduleb/addNum")
      this.$store.dispatch("a/syncAddNum",10)
    }
  },
  created () {
    console.log(this.$store)
  }
}
</script>
