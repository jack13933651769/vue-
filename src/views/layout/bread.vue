<template >
  <div>
    <div class="bgcolor">
      <span>
        <img src="../../assets/samll.png" alt />
        <img src="../../assets/big.png" alt />
      </span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  scoped lang="scss">
.bgcolor {
  background: #f0f0f0;
  height: 30px;
  display: flex;
  align-items: center;
  span:nth-child(1) {
    margin-left: 5px;
  }
  img {
    cursor: pointer;
  }
}
</style>
