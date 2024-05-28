<template>
  <!--
    查：
      1：定义接口api
      2:导入api
      3:调用api存储数据,进入页面能执行的就是生命周期（beforeCreate,created,beforeMount,mounted）
      4：渲染数据
   -->
  <div class="departments">
    <el-card>
      <div class="main">
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
                    <el-dropdown-item>添加子部门</el-dropdown-item>
                    <el-dropdown-item>编辑部门</el-dropdown-item>
                    <el-dropdown-item>删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </template>
        </el-tree>
      </div>
    </el-card>
    <!-- 新增弹框组件 -->
    <Add ref="add" :init-list="initList" />
  </div>
</template>
<script>
import { companyDepartment } from '@/api/departments'
import Add from './components/add.vue'
export default {
  components: {
    Add
  },
  data() {
    return {
      list: [],
      initList: []
    }
  },
  async created() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await companyDepartment()
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
