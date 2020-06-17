<template>
  <div>
    <div class="footer">
      <p class="intro rflex">
        <span>{{$t('messages.title')}}</span>
        <a href="https://github.com/" target="_blank"></a>
        <span>jrj8768764321(wechat)</span>
      </p>
      <p class="intro">
        <span>京ICP备19029013号</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style  scoped lang="scss">
$content: calc(100% - 180px);
$header : 180px;
$search: 2;
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  background: #fff;
  .intro {
  width: 180px;
  margin-left: calc( (100% - 240px) / 2);
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
   p {
  line-height: 30px;

  span,a{
  margin: 0 auto;
  }

}
}

</style>
