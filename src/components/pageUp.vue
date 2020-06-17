<template>
  <div>
    <div class="myscss" v-show="status" @click="goscrollTop">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let headerheight = document.querySelector(".header").clientHeight;
      let scrollObj = document.querySelector(".menu_content"); // 滚动区域
      let scrollTop = scrollObj.scrollTop; // div 到头部的距离
      let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      //滚动条到底部的条件
      if (scrollHeight - scrollTop <= clientHeight - headerheight) {
        this.status = true;
      } else {
        this.status = false;
      }
    },
    goscrollTop() {
      document.querySelector(".menu_content").scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.myscss {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;
  cursor: pointer;
  opacity: 0.3;
  .img {
    background: url("../assets/up.png") no-repeat;
    background-position: center;
    background-size: 16px;
    background-color: #1890ff;
    width: 40px;
    height: 40px;
    overflow: hidden;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
}
.myscss:hover {
  opacity: 1;
}
</style>