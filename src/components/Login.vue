<template>
  <div class="login">
    <div class="login-window" v-if="1">
      <span class="title">欢迎登录</span>
      <el-input prefix-icon="el-icon-user" v-model="input" placeholder="用户名"  ></el-input>
      <el-input prefix-icon="el-icon-lock" v-model="input" placeholder="密码"></el-input>
      <el-button type="primary" plain>登录</el-button>
      <el-button plain>注册</el-button>
    </div>
    <div class="regist-window" v-if="0">
      
      <el-input prefix-icon="el-icon-user" v-model="input" placeholder="用户名"  ></el-input>
      <el-input prefix-icon="el-icon-lock" v-model="input" placeholder="密码"></el-input>
      <el-button type="primary" plain>提交</el-button>
      <el-button plain>登录</el-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.login{
  height:100vh;
  width: 100%;
  background: url('../assets/back.jpg');
  background-size: cover;
}
.login-window, .regist-window {
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
  border: 1px solid #778899;
  padding: 10px;
  padding-bottom: 20px;
 
}
.regist-window{
  padding-top:30px;
}
.title{
  color: white;
  margin-bottom: 20px;
  display: block;
}
</style>
<style>
.login .el-input{
    width:250px;
    margin-bottom: 10px;
}
.login .el-button{
  margin-top:20px;
  margin-right:30px;
  margin-left:20px;
}
*{
  margin:0 ;
  padding:0;

}
</style>