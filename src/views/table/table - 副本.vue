<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <el-button type="primary" @click="a">截图并下载</el-button>
    <div id="all"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aa: ''
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    a () {
      this.$html2canvas(document.getElementById('myChart')).then(function (
        canvas
      ) {
        var dataUrl = canvas.toDataURL('image/jpeg', 1.0)
        var newImg = document.createElement('a')
        newImg.href = dataUrl
        newImg.download = 'download'
        newImg.innerHTML = 'aaaaaaaaa'
        newImg.style.display = 'none'
        var p = document.querySelector('#all')
        p.appendChild(newImg)
        newImg.click()
      })
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>

<style  scoped>
</style>
