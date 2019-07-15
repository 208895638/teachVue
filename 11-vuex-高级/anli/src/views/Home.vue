<template>
  <div class="home" @click="adds">
    {{ price }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState , mapGetters , mapMutations , mapActions} from "vuex"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      priceName:"元"
    }
  },
  methods:{
    ...mapMutations(["add1"]), // 数组写法   
    ...mapMutations({
      add2:"add2"   // 对象写法
    }),
    ...mapActions({
      adds:"adds"
    })
  },
  created () {
    console.log(mapMutations(["add1","add2"]) , 111)
  },
  computed: {
    ...mapState({
      nun:"num",  // 第一种写法
      nums:state => state.num,  // 第二种写法
      num1(state){  // 第三种写法  
        return state.num + this.priceName
      }
    }),
    ...mapGetters({
      price:"price",
    })
    // num(){
    //   return this.$store.state.num
    // },
    // price(){
    //   return this.$store.getters.price
    // }
  },
  // methods: {
  //   add(){
  //     //this.$store.commit("add")
  //     this.$store.dispatch("adds")
  //   }
  // }
}
</script>
