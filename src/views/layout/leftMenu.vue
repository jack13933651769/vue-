<template>
  <div>
    <el-row class="leftMenu">
      <el-col :span="24">
        <div class="logo">{{$t('messages.title')}}</div>
      </el-col>
      <el-col :span="24" class="leftMenu-bottom">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{$t('messages.fund')}}</span>
            </template>
            <el-menu-item-group>
              <!-- <el-menu-item index="1-1" @click="go('list')">我的基金</el-menu-item>
              <el-menu-item index="1-2" @click="go('chart')">宝宝的基金</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="5" @click="go('table')">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">{{$t('messages.chart')}}</span>
          </el-menu-item>
          <el-menu-item index="3" @click="go('text')">
            <i class="el-icon-menu"></i>
            <span slot="title">{{$t('messages.permission')}}</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">{{$t('messages.share')}}</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-apple"></i>
            <span slot="title">{{$t('messages.infos')}}</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-watermelon"></i>
            <span slot="title">{{$t('messages.money')}}</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>{{$t('messages.funddata')}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="8">
            <i class="el-icon-setting"></i>
            <span slot="title">{{$t('messages.permission')}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
<!-- <a class="link" @click="aa" target="_blank">aaaaaaaaaaaaaaaaaaaa</a> -->
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    go (name) {
      this.$router.push({ path: name })
    },
    aa () {
      let routeUrl = this.$router.resolve({
        path: '/login1'
        // query: {id: 96}
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style  scoped>
.leftMenu {
  height: 100%;
  background: #cccccc;
}
.logo {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
}
.leftMenu-bottom {
  height: calc(100vh - 60px);
      background-color: rgb(84, 92, 100);
  /* height:calc(100% - 75px); */
  overflow: auto;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
