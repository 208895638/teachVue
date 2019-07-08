<template>
  <div class="about">
    <h1>This is an about page</h1>
    <tip :list="list"></tip>
  </div>
</template>
<script>
import tip from "@/components/tip.vue"
export default {
    components: {
      tip,
      list:""
    },
    created () {
      console.log(this.$route.query)
      this.list  = this.$route.matched;
    }
}
</script>

