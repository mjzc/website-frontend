<template>
   <div class="log-from-box">
        <h1>网页管理系统</h1>
        <label for="">账号：</label>
        <input type="text" v-model="adminAccountNumber">
        <br>
        <label for="">密码：</label>
        <input type="password" v-model="adminPassword">
        <br>
        <button class="log-btn" @click="adminLogin">登录</button>
    </div>
</template>

<script>
import { webAdminLogin } from "../../api/admin";
export default {
  name: "login",
  data: function() {
    return {
      adminAccountNumber: "",
      adminPassword: ""
    };
  },
  methods: {
    adminLogin: function() {
      if (this.adminAccountNumber == "") {
        alert("账号不能为空");
        return;
      } else if (this.adminPassword == "") {
        alert("密码不能为空");
        return;
      }
      var that = this;
      var requestData = {
        account: this.adminAccountNumber,
        password: this.adminPassword
      };
      webAdminLogin(requestData)
        .then(response => {
          if (response.data.code == 20000) {
            that.$store.state.id = response.data.id
            that.$store.state.userName = response.data.username;
            that.$store.state.token = response.data.token
            window.localStorage.setItem('web_user', response.data.id)
            window.localStorage.setItem('jwt', response.data.token)
            that.$router.push('/web_admin')
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
@import url('../../styles/admin.css');
</style>
