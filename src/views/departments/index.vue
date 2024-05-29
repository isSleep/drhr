<template>
  <!--
    查：
      1：定义接口api
      2:导入api
      3:调用api存储数据,进入页面能执行的就是生命周期（beforeCreate,created,beforeMount,mounted）
      4：渲染数据

    删：
      1：删除按钮绑定点击事件，点击事件弹出确认框
      2:定义删除接口api,导入删除api
      3:确认框点击确认后调用删除api
      4:调用成功：提示，刷新列表

    改：
      1：点击修改打开弹框（新增组件共用弹框）
      2：修改弹框组件的标题：编辑部门
      3：弹框组件内数据回显
      4：表单验证调整
      5：调用编辑接口api(定义导入与调用api) =>分场景调用：新增部门与编辑部门
      6：调用成功：1：提示  2：关闭弹框  3：清空表单数据与验证 4：刷新父级列表
   -->
  <div class="departments">
    <el-card>
      <div v-loading="loading" class="main">
        <div class="top" style="margin-bottom: 20px">
          <div class="name">东软</div>
          <div class="manager">负责人</div>
          <!-- 下拉菜单：
                el-dropdown
                    默认插槽：默认显示内容
                    具名插槽：dropdown  菜单
                       el-dropdown-menu
                           el-dropdown-item
            -->
          <el-dropdown>
            <div class="option">操作 <i class="el-icon-arrow-down" /></div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  @click.native="addEvent"
                >添加子部门</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 树形控件 -->
        <el-tree :data="list" :props="{ label: 'name' }" default-expand-all>
          <template v-slot="{ data }">
            <div class="top" style="width: 100%">
              <div class="name">{{ data.name }}</div>
              <div class="manager">{{ data.manager }}</div>
              <el-dropdown>
                <div class="option">操作 <i class="el-icon-arrow-down" /></div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      @click.native="addEvent2(data.id)"
                    >添加子部门</el-dropdown-item>
                    <el-dropdown-item
                      @click.native="editEvent(data)"
                    >编辑部门</el-dropdown-item>
                    <el-dropdown-item
                      @click.native="delEvent(data.id)"
                    >删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </template>
        </el-tree>
      </div>
    </el-card>
    <!-- 新增弹框组件 -->
    <Add ref="add" :init-list="initList" @getData="getData" />
  </div>
</template>
<script>
import { companyDepartment, companyDepartmentDelete } from '@/api/departments'
import Add from './components/add.vue'
export default {
  components: {
    Add
  },
  data() {
    return {
      loading: false,
      list: [],
      initList: []
    }
  },
  async created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.loading = true
      const res = await companyDepartment()
      this.loading = false
      this.initList = res.data.depts
      this.list = this.changeData(res.data.depts, '')
      console.table(res.data.depts)
      // console.log('组织架构列表', res)
    },
    changeData(arr, pid) {
      return arr.filter((item) => {
        if (item.pid === pid) {
          item.children = this.changeData(arr, item.id)
          return true
        } else {
          return false
        }
      })
    },
    // 新增事件
    addEvent() {
      // 打开弹窗
      this.$refs.add.show = true
      // 修改要添加项的pid的值
      this.$refs.add.form.pid = ''
      // 修改mode场景值
      this.$refs.add.mode = 'add'
    },
    // 新增事件2
    addEvent2(id) {
      // 打开弹窗
      this.$refs.add.show = true
      // 修改要添加项的pid的值
      this.$refs.add.form.pid = id
      // 修改mode场景值
      this.$refs.add.mode = 'add'
    },
    // 删除事件
    async delEvent(id) {
      await this.$confirm('您确定删除该条数据吗?', '温馨提示')
      // 下面代码就是确认框点击确认后执行
      await companyDepartmentDelete(id)
      // 提示
      this.$message.success('删除部门成功')
      // 刷新列表
      this.getData()
    },
    // 编辑部门
    editEvent(data) {
      // 打开弹窗
      this.$refs.add.show = true
      // 修改mode场景值
      this.$refs.add.mode = 'edit'
      // 回显数据
      this.$refs.add.form = JSON.parse(JSON.stringify(data))
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.departments {
  padding: 20px;
  .main {
    width: 80%;
    margin: 0 auto;
    .top {
      display: flex;
      .name {
        flex: 1;
      }
      .manager {
        width: 110px;
      }
    }
  }
}
</style>
