<template>
  <div class="login">
    <div justify="center" class="logincont">
      <el-row type="flex" justify="center" align="center" class="padding-top">
        <el-col :span="12" type="flex" justify="center" align="center">登录</el-col>
      </el-row>
      <el-row type="flex" justify="center" align="center">
        <el-col :span="20">
          <el-input v-model="username" placeholder="请输入用户名" type="text" class="padding-top10"></el-input>
          <el-input v-model="password" placeholder="请输入密码" type="password" class="padding-top"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="center" class="padding-top">
        <el-col :span="20" type="flex">
          <el-button type="primary" class="submit_btn" @click="login">登陆</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="center" class="padding-top10 padding-bottom">
        <el-col :span="20" type="flex">
          <p class="wxtip">温馨提示：</p>
          <p class="tip">
            用户名为：admin/editor
            <span>(可用于切换权限)</span>
          </p>
          <p class="tip">密码为：123456</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      sessionStorage.setItem('user', '1111')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style  scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
  position: absolute;
}
.logincont {
  margin: 0 auto;
  width: 400px;
  margin-top: 150px;
  background: #fff;
  border-radius: 5px;
}
.padding-top10 {
  padding-top: 10px;
}
.padding-top {
  padding-top: 25px;
}
.input {
  width: 100%;
}
.padding-bottom {
  padding-bottom: 50px;
}
.submit_btn {
  width: 100%;
  padding: 13px 0;
  font-size: 16px;
}
</style>
