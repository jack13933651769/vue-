<template >
  <div >
	      <!-- <org-chart :datasource="ds" @node-click="selectNode">

    </org-chart> -->

 <el-time-picker
    v-model="value"
    :picker-options="{
      selectableRange: '09:00:00 - 20:30:00'
    }"
    value-format= "HH:mm"
    format='HH:mm'
    placeholder="任意时间点">
  </el-time-picker>
    <!-- 新增加班弹出框 -->
    <!-- <el-dialog title="选择部门/机构" :visible.sync="deptVisible" :show-close="false" width="50%" top="50px">
        <el-row style="padding: 0px 30px;margin-top:-20px;margin-bottom:-20px;" >
          <el-col :span="11">
              <div style="margin-bottom:10px;">选择：</div>
              <div class="tree-content1">
				  <div style="padding:10px;">
					   <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
				  </div>
				<div  ref="testDom" style="padding:10px;display:flex;">
				<i  class="el-icon-d-arrow-left backicon" v-if="page>1" @click="backpage"></i>
				<div ref="testDomItem"  class="DomItem" style="display:inline-block;">
						<span v-for="(item,index) in NavList" :key="index" class="spans">
						<i v-if="index>0" class=" el-icon-arrow-right"></i>
						<el-tooltip class="item" effect="dark" :content="item" placement="bottom">
							<a   @click="getgroup(item)" class="blue">{{item}}</a>
   						</el-tooltip>

						</span>
				</div>
				</div>
				<div  style="padding:0px 10px 10px 10px;">
					<el-checkbox v-model="checkAll"  @change="handleCheckAllChange">全选</el-checkbox>
				</div>
                <el-tree ref="deptTree" class="filter-tree" :props="props" node-key="id" :load="loadNode" lazy
                  :check-on-click-node="true" :expand-on-click-node="false" :filter-node-method="filterNode"
                   show-checkbox @check-change="handleCheckChange">
                  <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                    <span>
                      <el-button type="text" size="mini" @click="() => remove(node, data)">
                        下级
                      </el-button>
                    </span>
                  </span>
                </el-tree>
              </div>
          </el-col>
          <el-col :span="2"><div class="margin-left:10px;">&nbsp;</div></el-col>
          <el-col :span="11">
              <div style="margin-bottom:10px;">已选：</div>
              <div class="tree-content1">
                <template>
                  <el-table :data="selectedData" border style="width: 100%" :show-header="false">
                    <el-table-column prop="name" label=""></el-table-column>
                    <el-table-column label="操作" width="80">
                        <template slot-scope="scope">
                            <el-button type="text" @click.native.prevent="deleteSelectDept(scope.rows.id)">删除</el-button>
                        </template>
                    </el-table-column>
                  </el-table>
                </template>
              </div>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer" align="center">
            <el-button @click="closeDeptDialog()">取 消</el-button>
            <el-button type="primary" @click="saveSelectedDept">确 定</el-button>
        </span>
    </el-dialog>
	 <el-checkbox v-model="checked" class="aa">备选项</el-checkbox> -->
  </div>
</template>

<script>
import OrgChart from '../../components/vue-orgchart/OrganizationChartContainer.vue'
export default {
  name: 'DeptDialog',
  components: {
    OrgChart
  },
  mounted () {
    // this.value = new Date('9:00')
    // console.log(new Date('09:00'))
  },
  //   props:['dialogVisible','closeDeptDialog','queryDeptSelected'],
  data () {
    return {
	  value: '09:00',
      //   val: '09:00',
      ds: {
        'id': '1',
        'name': 'Lao Lao',
        'title': 'general manager',
        'children': [
          { 'id': '2', 'name': '万古科技有限公司', 'title': '万古科技有限公司啊啊啊啊啊啊啊啊啊啊', 'people': '16', 'allpeople': '32'},
          { 'id': '3',
            'name': 'Su Miao',
            'title': 'department manager',
            'children': [
              { 'id': '4', 'name': 'Tie Hua', 'title': 'senior engineer'},
              { 'id': '5',
                'name': 'Hei Hei',
                'title': 'senior engineer',
                'children': [
                  { 'id': '6', 'name': 'Pang Pang', 'title': 'engineer' },
				  { 'id': '7',
                    'name': 'Xiang Xiang',
                    'title': 'UE engineer',
                    children: [
					   { 'id': '7', 'name': 'Xiang Xiang', 'title': 'UE engineer' }
				  ]},
				   { 'id': '7', 'name': '1 Xiang', 'title': 'UE engineer' }
                ]
              }
            ]
          },
          { 'id': '8', 'name': 'Hong Miao', 'title': 'department manager' },
          { 'id': '9', 'name': 'Chun Miao', 'title': 'department manager' }
        ]
      }

    //   filterText: '',
    //   deptVisible: true,
    //   props: {
    //     label: 'label',
    //     children: 'children'
    //   },
    //   deptTree: [],
    //   selectedData: [{ id: '1', name: 'aaa' }],
    //   newdata: {

    //   },
      //   checkAll: false,
      //   NavList: [],
      //   wholeBread: [],
      //   page: 0
    }
  },
  methods: {
	   selectNode (nodeData) {
      alert('node ' + nodeData.name + ' is selected')
    }
  }
//   methods: {
//     close () {
//       this.deptVisible = false
//     },
//     saveSelectedDept () {
//       this.queryDeptSelected('123')
//       this.closeDeptDialog()
//     },
//     handleNodeClick (data) {
//       console.log(data)
//       // this.$refs.deptTree.setCheckedKeys([3]);
//     },
//     handleCheckChange (data, checked, indeterminate) {
//       // 选中状态被改变时
//       console.log(data, checked, indeterminate)
//       if (checked) {
//         // 选中  删除所有下级节点，当前节点设置为叶子节点
//       }
//     },
//     loadNode (node, resolve) {
//       if (node.level === 0) {
//         return resolve([{ label: 'region1' }])
//       }
//       if (node.level > 1) return resolve([])

//       setTimeout(() => {
//         const data = [
//           {
//             label: 'leaf2',
//             leaf: true
//           },
//           {
//             label: 'zone31111111111111'
//           }, {
//             label: 'zone4'
//           }, {
//             label: 'zone5'
//           }, {
//             label: 'zone6'
//           }, {
//             label: 'zone7'
//           }, {
//             label: 'zone8'
//           }
//         ]
//         resolve(data)
//       }, 500)
//     },
//     filterNode (value, data) {
//       if (!value) return true
//       return data.label.indexOf(value) !== -1
//     },
//     remove (node, data) {
//       this.wholeBread = this.wholeBread.length ? this.wholeBread : [...this.NavList]
// 	  this.wholeBread.push(data.label)
// 	  this.page = Math.ceil(this.wholeBread.length / 3)
// 	  this.NavList = this.wholeBread.concat().slice(-3)
//     },
//     getgroup (data) {
// 	  let indexs = this.wholeBread.indexOf(data)
// 	  this.wholeBread = this.wholeBread.filter((item, index) => indexs >= index)
// 	  this.NavList = this.wholeBread.concat().slice(-3)
// 	  this.page = Math.ceil(this.wholeBread.length / 3)
//     },
//     backpage () {
// 	  this.page = this.page - 1
//       let wholeBreadindex = (this.wholeBread.length - 1) - 3
// 	  this.wholeBread = this.wholeBread.filter((item, index) => wholeBreadindex >= index)
// 	  this.NavList = this.wholeBread.concat().slice(-3)
//     },
//     handleCheckAllChange (val) {
//       console.log(this.checkAll)
//       if (this.checkAll) {
//         this.$refs.deptTree.setCheckedNodes([
//           {
//             label: 'leaf',
//             leaf: true
//           },
//           {
//             label: 'zone'
//           }
//         ])
//       } else {
//         this.$refs.deptTree.setCheckedKeys([])
//       }
//     }
//   }
//   watch: {
//     dialogVisible: function (val) {
//       console.log('2:' + this.deptVisible)
//       this.deptVisible = val
//       console.log('3:' + this.deptVisible)
//       // this.$emit('', val);
//     }
//   },
//   mounted () {
//   }
}
</script>

<style lang="css" scoped>
.tree-content1 {
  margin-top: 0;
  min-height: calc(100vh - 250px);
  border: 1px solid #dccdcd;
}

#aa span.el-checkbox__label {
  height: 10px !important;
  vertical-align: middle !important;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.li-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.blue{
  color: #66b1ff;
  cursor: pointer;
}
.DomItem span:last-child .blue{
  color: #333;
  cursor: pointer;
  font-weight: normal;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #66b1ff !important;
}
.blue i.el-breadcrumb__separator[class*=icon] {
    margin: 0 4px !important;
    font-weight: 400;
}
.DomItem .spans:first-child{
	width: 53px;
}
.spans{
	white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
	display: inline-block;
	width: 70px;
}
.spans i{
	color:#333;
}
.backicon{
display:inline-block;width:20px;cursor: pointer;color:#333;margin-top:2px;
}

.el-dialog__body {
    padding: 0px !important ;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
</style>
