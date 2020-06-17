<template>
  <div style="padding:10px;height:800px; overflow:auto;">
    <div class="btn">
      <el-button type="primary" icon="el-icon-plus" @click="open">{{$t('messages.add')}}</el-button>
    </div>
    <div class="myfond">
      <div class="myfonditem" v-for="(item,index) in data" :key="index">
        <h3 class="blue">{{item.name}}</h3>
        <!-- <p>{{item.name}}</p> -->
        <p>{{$t('messages.fundcode')}}: {{item.fundcode}}</p>
        <p>{{$t('messages.update')}}: {{item.gztime}}</p>
        <p>{{$t('messages.presentprice')}}: {{item.gsz}}</p>
        <p>
         {{$t('messages.increase')}}:
           <span :class="item.gszzl>0?'red':'green'">{{item.gszzl}}</span>
          <i class="el-icon-bottom green" v-show="item.gszzl<0"></i>
          <i class="el-icon-top red" v-show="item.gszzl>0"></i>
          <el-button type="danger" icon="el-icon-delete" class="fr" @click="tishi(index,item.name)">{{$t('messages.del')}}</el-button>
        </p>
      </div>
    </div>
	<pageUp></pageUp>
  </div>
</template>

<script>
import { getCoinList, selectmyfond, updatemyfond80} from '../../api/api'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [],
      myfond: [],
	  json: {}
    }
  },
  created () {
    // console.log(JSON.stringify(this.text));
    // let json = {}
    // for(let i=0;i<=this.text.length;i++){
    // 	json += i:this.text[i]
    // }
  },
  mounted () {
    // this.drawLine();
    var _this = this
    selectmyfond(`selectmyfond?uid=81`).then(data => {
      var data = data.result.data[0]
      var datas = JSON.parse(data.myfond)
      for (let x in datas) {
        _this.myfond.push(datas[x])
      }
	  }).then(() => {
		  this.concatArrGet()
	  })
    //   .then(()=>{
    // 	  setInterval(this.concatArrUpdate, 10000)
    //   })
  },
  methods: {
    tishi (index, name) {
      this.$confirm('你确定要删除' + name + '基金吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.del(index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getdata () {
      var _this = this
      selectmyfond(`selectmyfond?uid=81`).then(data => {
        _this.myfond = []
        var data = data.result.data[0]
        var datas = JSON.parse(data.myfond)
        for (let x in datas) {
          _this.myfond.push(datas[x])
        }
	  }).then(() => {
		  this.data = []
		  this.concatArrGet()
      })
      // 	let _this  = this;
      // 	this.myfond = []
      // 	selectmyfond(`selectmyfond?uid=81`).then(data => {
      // 	var data = data.result.data[0];
      // 	console.log(data.myfond)
    //     var datas = JSON.parse(data.myfond);
    //     for (let x in datas) {
    //       _this.data.push(datas[x]);
      // 	}
      //   }).then(()=>{
      // 		this.data = []
      // 	   this.concatArrGet()
      //   })
    },
    del (index) {
      let delpromise = new Promise((resolve, reject) => {
        this.myfond.splice(index, 1)
        resolve()
        console.log(this.json)
      }).then(() => {
        for (var i = 0; i <= this.myfond.length; i++) {
          this.json[i] = this.myfond[i]
        }
      }).then(() => {
        let jsondata = JSON.stringify(this.json)
			 updatemyfond80(`upDate81?myfond=${jsondata}`).then(data => {
          if (data.result.code == 0) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getdata()
          } else {
            this.$message({
              type: 'info',
              message: '删除失败'
            })
          }
        })
      })
    },
    add (number) {
      let addpromise = new Promise((resolve, reject) => {
        this.myfond.push(number)
        resolve()
        console.log(this.json)
      }).then(() => {
        for (var i = 0; i <= this.myfond.length; i++) {
          this.json[i] = this.myfond[i]
        }
      }).then(() => {
        let jsondata = JSON.stringify(this.json)
			 updatemyfond80(`upDate81?myfond=${jsondata}`).then(data => {
          if (data.result.code == 0) {
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.getdata()
          } else {
            this.$message({
              type: 'info',
              message: '添加失败'
            })
          }
        })
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
    },
    getfond (fundnumber, index) {
      // 请求获取接口
      getCoinList(`selectfund?js_code=${fundnumber}`).then(data => {
        this.data.push(data)
	  })
    },
    updatefond (fundnumber, index) {
      // 第二次请求数据并更新数据
      // this.data = []
      getCoinList(`selectfund?js_code=${fundnumber}`).then(data => {
        console.log(data)
        this.data[index].gztime = data.gztime
        this.data[index].gsz = data.gsz
        this.data[index].gszzl = data.gszzl
        this.data[index].name = data.name
        this.data[index].fundcode = data.fundcode
      })
    },
    concatArrGet () {
	  let _this = this
      // console.log(_this.myfond);
      this.myfond.forEach(function (item, index) {
        // console.log(item);
        _this.getfond(item, index)
	  })
	  console.log(this.myfond)
    },
    concatArrUpdate () {
      let _this = this
      this.myfond.forEach(function (item, index) {
        // console.log(item);
        _this.updatefond(item, index)
	  })
    },
    open () {
      this.$prompt('请输入添加的基金编号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.add(value)
        //   this.$message({
        //     type: "success",
        //     message: "你的基金编号是: " + value
        //   });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    }
  }
}
</script>

<style  scoped>
* {
  box-sizing: border-box;
}
.a {
  box-sizing: border-box;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.myfonditem {
  padding: 10px;
  background: #a0f7eb;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: #ccc 5px 5px 2px;
  margin-right: 10px;
  margin-left: 10px;
  width: 23%;
}
.myfonditem p {
  line-height: 28px;
}
.red {
  color: #ff0000;
}
.green {
  color: #008000;
}
.blue {
  background: #4372ba;
  color: #fff;
  text-align: center;
}

.myfond {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  padding: 10px;
}
.fr {
  float: right;
}
</style>
