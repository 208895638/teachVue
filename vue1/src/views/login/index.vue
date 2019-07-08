<template>
    <div>
        登陆页
        <label for="">请输入用户名 <input type="text" v-model.trim="user.username" placeholder="用户名"></label>
        <label for="">请输入密码<input type="password" v-model.trim="user.password" placeholder="密码"></label>
        <button @click="login">登陆</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user:{
                username:"",
                password:""
            }
            
        }
    },
    methods: {
        login(){
            if(this.user.username == "" || this.user.username == null || this.user.username == undefined){
                alert("请输入用户名");
                return 
            }
            if(this.user.password == "" || this.user.password == null || this.user.password == undefined){
                alert("请输入密码");
                return 
            }
            
            let user = this.$router.options.routes.find(ele => ele.path == "/user");
            
            user.meta.userInfo = this.user;
            console.log(this.$router.options.routes);
            alert("登陆成功,跳转到首页！")
            this.$router.push("/")
        }
    }
}
</script>

