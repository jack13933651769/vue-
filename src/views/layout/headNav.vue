<template >
  <div class="header">
    <div class="header-left">
      <!-- <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>-->
    </div>
    <div class="header-right">
      <ul class="top-menu">
        <li></li>
      </ul>

      <div class="userinfo">
        <!--  -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo langage"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">{{$t('messages.langage')}}</template>
            <el-menu-item index="2-1" @click="lang('zh-CN')">中文</el-menu-item>
            <el-menu-item index="2-2" @click="lang('en-US')">English</el-menu-item>
          </el-submenu>
        </el-menu>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="2" class="headimg">
            <template slot="title">
              <div>
                <span>{{$t('messages.hi')}},</span>
                <span class="namecolor font-weight">蒋新生</span>
                <img src="../../assets/112.jpg" alt />
              </div>
            </template>
            <el-menu-item index="2-1">{{$t('messages.myinfo')}}</el-menu-item>
            <el-menu-item index="2-2">{{$t('messages.revise')}}</el-menu-item>
            <el-menu-item index="2-3" @click="signout">{{$t('messages.Signout')}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '',
      handleSelect: ''
    }
  },
  methods: {
    signout () {
      sessionStorage.removeItem('user')
      this.$router.push('/login')
    },
    lang (type) {
	  this.$i18n.locale = type
	  console.log(this.$i18n.locale)
    }
  }
}
</script>

<style scoped   lang="scss">
.langage >>> div {
}
.headimg >>> i {
  display: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.header {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
}
.header-right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}
.header-left {
  flex: 0 1 80%;
}

.userinfo img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.userinfo .username {
  margin-right: 20px;
}
.userinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.namecolor {
  color: rgb(255, 178, 127);
  font-family: "宋体";
  margin-right: 10px;
}
.font-weight {
  font-weight: bold;
}
</style>
