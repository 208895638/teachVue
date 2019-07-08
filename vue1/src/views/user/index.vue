<template>
    <div>
        <div>
            用户账号 : {{ user }}
        </div>
        <div>
            用户密码 : {{ pass }}
        </div>
        <button @click="logoout">退出登陆</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user:"",
            pass:""
        }
    },
    methods: {
        logoout(){
            this.$route.meta.userInfo = "";
            this.$router.push("/login");
        }
    },
    created () {
        this.user = this.$route.meta.userInfo.username;
        this.pass = this.$route.meta.userInfo.password;
        console.log(this,111)
    }
}
</script>

