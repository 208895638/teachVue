<template>
  <div class="home">
    <img alt="Vue logo"  src="../assets/logo.png">
    <hr>
    <!-- {{ num }} {{ age }} {{ name }} {{ price }} -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState , mapGetters , mapMutations , mapActions } from "vuex"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username:"用户名"
    }
  },
  computed: {
    ...mapState({
      num:"num",
      age:state => state.age,
      name (state) {
        return this.username + state.name ;
      }
    }),
    ...mapGetters({
      price:"price"
    })
  },
  methods: {
    ...mapMutations([
      "add"
    ])
  }
}
</script>
