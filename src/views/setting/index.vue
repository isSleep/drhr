<template>
  <div class="setting">
    <el-card>
      <el-tabs>
        <el-tab-pane label="角色管理">
          <el-button type="primary">新增角色</el-button>
          <el-table :data="list" border>
            <el-table-column
              align="center"
              label="序号"
              type="index"
              width="50"
            />
            <el-table-column align="center" label="名称" />
            <el-table-column align="center" label="描述" />
            <el-table-column align="center" label="操作">
              <template v-slot="{ row, $index }">
                <el-button type="success">分配权限</el-button>
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="公司信息">公司信息</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{}]
    }
  }
}
</script>
<style lang="scss" scoped>
.setting {
  padding: 30px;
}
</style>
