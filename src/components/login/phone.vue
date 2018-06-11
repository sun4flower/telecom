<template>
    <div class="login">
        <el-form :model="login_module" ref="form">
            <el-form-item prop="account" label="登录账号" :rules="rules">
                <el-input v-model="login_module.account" placeholder="请输入手机号或邮箱">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="fn('phone')" :disabled="isPhonedisabled">{{phonePwd}}</el-button>
                <el-button type="primary" @click="fn('email')" :disabled="isEmaildisabled">{{EmailPwd}}</el-button>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="login_module.password" placeholder="请输入动态密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit()">登录</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "../../store/index"
export default {
    name: "",
    data() {
        return {
            login_module: {
                account: "",
                password: "",
            },
            rules: [
                { required: true, message: '不能为空' }
            ],
            phonePwd: "手机获取动态密码",
            EmailPwd: "邮箱获取动态密码",
            timer: null,
            isPhonedisabled: false,
            isEmaildisabled: false

        }
    },

    methods: {
        submit(){
            axios.get("/getuser",{params:{username:this.login_module.account,password:this.login_module.password}}).then(res=>{
                if(res.data.code==1){
                    sessionStorage.setItem("key","3")
                     this.$router.push("/home")
                }else{
                    alert("登录失败")
                }
            })
        },
        getCode(type) {
            let n = 5;
            this.timer = setInterval(() => {
                n--;
                type == "phone" ? (this.phonePwd = n, this.isPhonedisabled = true) : (this.EmailPwd = n, this.isEmaildisabled = true)

                if (n <= 0) {
                    type == "phone" ? (this.phonePwd = "手机获取动态密码", this.isPhonedisabled = false) : (this.EmailPwd = "邮箱获取动态密码", this.isEmaildisabled = false)
                    clearInterval(this.timer)
                }
            }, 1000)
        },
        fn(type) {
            if (this.rules.length > 1) {
                this.rules.pop()
            }
            if (type == "phone") {
                this.rules.push({validator: (rule, value, callback) => {
                        let reg = /^1[3,5,8,6]\d{9}/
                        if (reg.test(value)) {
                            callback()
                        } else {
                            callback(new Error('请输入正确的手机号码'))
                        }
                    }, message: '请输入正确的手机号码'                })

            } else if (type == "email") {
                this.rules.push({ type: 'email', message: '请输入正确的邮箱地址' })
            }

            this.$refs.form.validate((isValid, rules) => {
                if (isValid) {
                    this.getCode(type)
                }
            })

        }
    }
}
</script>
<style scoped>
.login {
  padding: 10px 30px;
}
.login input {
  width: 100%;
  border: 2px solid #eee;
  border-radius: 5px;
  height: 30px;
  margin: 5px 0;
}
.submit {
  height: 30px;
  display: block;
  width: 80%;
  background: skyblue;
  border: none;
  margin: 10px auto;
}
</style>


