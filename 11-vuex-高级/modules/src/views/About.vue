<template>
  <div class="about">
    <h1 @click="add(2)">{{ price }}</h1>
  </div>
</template>
<script>
import { mapState , mapGetters , mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      //num:"num"  // 这种写法是没有模块化前的写法
      num:state => state.moduleb.num   // 使用模块化之后 使用辅助函数 后面跟的是module
    }),
    ...mapGetters({
      price:"moduleb/price"
    }),
  },
  methods: {
    // ...mapMutations({
    //   add:"moduleb/addNum"
    // })
    ...mapActions({
      add:"moduleb/syncAdd"
    })
  },
  created () {
    console.log(this.$store)
  }
}
</script>
