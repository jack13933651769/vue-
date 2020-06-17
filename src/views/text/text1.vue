<template>
  <div>
<el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
<el-drawer

  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  :show-close="false"
  >
<div>
<div class="demo-drawer__header">
	<h1>11111111111111111111</h1>
</div>
<div class="demo-drawer__content">
	<el-form :model="form">
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
	<div style="height:1000px;">

	</div>
</div>

    <div class="demo-drawer__footer">
		<el-button @click="cancelForm">取 消</el-button>
		<el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
		<el-button @click="cancelForm">取 消</el-button>
    </div>
  </div>
</el-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null
    }
  },
  methods: {
    handleClose (done) {
      if (this.loading) {
        return
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    }
  }
}
</script>

<style  scoped>

.demo-drawer{
position: relative;
}
.demo-drawer__header{
position: absolute;
top: 0;
box-sizing: border-box;
padding: 20px;
border-bottom: 1px solid #ccc;
width: 100%;
}
.demo-drawer__content{
padding-top: 10px;
position: absolute;
top: 62px;
width: 100%;
height: calc(100vh - 125px);
overflow:auto;
}
.demo-drawer__footer{
position: absolute;
bottom: 0;
padding: 10px;
width: 100%;
box-sizing: border-box;
display: flex;
border-top: 1px solid #ccc;
  justify-content: space-between;
}
.demo-drawer__footer .flex-item{
flex: 1;
}
.demo-drawer__footer .flex-item button{
margin:0 auto;
display: inherit;
}
</style>
