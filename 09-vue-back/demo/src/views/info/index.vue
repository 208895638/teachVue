<template>
    <div class="info">
        <div class="infos">

        </div>
        详情页
        <router-link to="/"> 首页</router-link>
    </div>
</template>
<script>
export default {
    created () {
        console.log(this.$route.query)   // 获取query传值
        
    }
}
</script>
<style lang="scss" scoped>
.info{
    height: 100%;
    overflow: auto;
}
.infos{
    height: 800px;
    background: blue;
}
</style>


