<template lang="html">
  <div class="common-deptdialog">
    <!-- 新增加班弹出框 -->
    <el-dialog title="选择部门/机构" :visible.sync="deptVisible" :show-close="false" width="50%">
        <el-row style="padding: 10px 30px">
          <el-col :span="11">
              <div style="margin-bottom:10px;">选择：</div>
              <div class="tree-content1">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
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
  </div>
</template>

<script>
export default {
  name: 'DeptDialog',
  props: ['dialogVisible', 'closeDeptDialog', 'queryDeptSelected'],
  data () {
    return {
      filterText: '',
      deptVisible: false,
      props: {
        label: 'label',
        children: 'children'
      },
      deptTree: [],
      selectedData: [
        {id: '1', name: 'aaa'}
      ]
    }
  },
  methods: {
    close () {
      this.deptVisible = false
    },
    saveSelectedDept () {
      this.queryDeptSelected('123')
      this.closeDeptDialog()
    },
    handleNodeClick (data) {
      console.log(data)
      // this.$refs.deptTree.setCheckedKeys([3]);
    },
    handleCheckChange (data, checked, indeterminate) { // 选中状态被改变时
      console.log(data, checked, indeterminate)
      if (checked) { // 选中  删除所有下级节点，当前节点设置为叶子节点

      }
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region' }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [{
          label: 'leaf',
          leaf: true
        }, {
          label: 'zone'
        }]
        resolve(data)
      }, 500)
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    remove () {
      console.log('删除方法')
    }
  },
  watch: {
    dialogVisible: function (val) {
      console.log('2:' + this.deptVisible)
      this.deptVisible = val
      console.log('3:' + this.deptVisible)
      // this.$emit('', val);
    }
    // filterText(val) {
    //   this.$refs.deptTree.filter(val);
    // }
  }
}
</script>

<style lang="css" scoped>
.tree-content1{
  margin-top:0px;
  min-height:calc(100vh - 350px);
  border: 1px solid #dccdcd;
}

.custom-tree-node{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
