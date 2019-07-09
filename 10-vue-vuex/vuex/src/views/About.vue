<template>
  <div class="about">
    <h1>This is an about page {{ age }} {{ name }}</h1>
    <hr>
    {{ num }}
  </div>
</template>
<script>
export default {
  created () {
    console.log(this,111)
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
      return this.$store.getters.nums
    }
  }
}
</script>
