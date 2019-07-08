<template>
    <div>
        <span v-for="(item , index) in list" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
            <b v-if="index != list.length-1">/</b>
        </span>
    </div>
</template>
<script>
export default {
    props: ["list"],
    created () {
        console.log(this.list,111)
    }
}
</script>

