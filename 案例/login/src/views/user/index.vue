<template>
    <div>
        user 
        <hr>
        username: {{ username }}
        <hr>
        userpass: {{ userpass }}
        <button @click="logout">
            退出登陆
        </button>
        <hr>
        <tip :list="list"></tip>
    </div>
</template>
<script>
import tip from "@/components/tip.vue"
export default {
    components: {
        tip
    },
    data () {
        return {
            username:"",
            userpass:"",
            list:""
        }
    },
    methods: {
        logout(){
            this.$route.meta.username = "";
            this.$route.meta.userpass = "";
            this.$router.push("/login")
        }
    },
    created () {
        var needs = this.$route.meta;
        this.list = this.$route.matched;
        this.username = needs.username;
        this.userpass = needs.userpass;
        //console.log(this.$route.meta)
    }
}
</script>
