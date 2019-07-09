<template>
    <div>
        详情页
        <router-link to="/"> 首页</router-link>
        <router-link to="/infos/3"> 详情也</router-link>
    </div>
</template>
<script>
var timer;
export default {
    created () {
        console.log(this.$route.params.name)   // 获取params传值
        timer = setInterval(function(){
            console.log(1);
        },300)
    },
    beforeRouteUpdate (to, from, next) {  // 只有被复用的时候才能调用的函数
        console.log(to.params.name,"复用的时候调用的函数");
        next()
    },
    beforeRouteLeave(to, from, next){
        clearInterval(timer);
        next()
    }
}
</script>

