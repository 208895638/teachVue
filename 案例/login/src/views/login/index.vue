<template>
    <div>
        <label for="">用户名<input type="text" v-model.trim="name"></label><br>
        <label for="">密码<input type="password" v-model.trim="pass"></label><br>
        <button @click="login">登陆</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name:"",
            pass:""
        }
    },
    methods: {
        login(){
            if(this.name == "" || this.name == null || this.name == undefined){
                alert("用户名不能为空!")
                return 
            }
            if(this.pass == "" || this.pass == null || this.pass == undefined){
                alert("用户名不能为空!")
                return 
            }
            var arrs = this.$router.options.routes;
            var needs = arrs.find(ele => ele.name == "user");
            needs.meta.username = this.name;
            needs.meta.userpass = this.pass;
            this.$router.push({name:"user"});
            //console.log(this.$router.options.routes)
            ///this.$router.push("/")
           // this.$router.push({path:"/user"})
          // this.$router.push({name:"user"});
           
        }
    },
    created () {
        console.log(this.$route)
    }
}
</script>

