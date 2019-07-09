<template>
  <div class="about">
    <h1 @click="events(4)">{{ a2 }}</h1>
  </div>
</template>
<script>
import { mapState , mapGetters , mapMutations , mapActions } from "vuex"
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState({
      a1: state => state.b.num,
    }),
    ...mapGetters({
        a2: "b/addNum1"
    }),
    num(){
      console.log(this.$store)
      //return this.$store.state.b.num
      //return this.$store.getters.addNum1
      return this.$store.getters["b/addNum1"]
    }
  },
  methods: {
    ...mapMutations({event : "b/addNum"}),
    ...mapActions({events : "b/syncAddNum"}),
  }
}
</script>
