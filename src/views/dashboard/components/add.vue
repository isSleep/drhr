<template>
    <el-dialog title="新增部门" width="600px" :visible.sync="show">
      <div>这里要用form表单</div>
      <template #footer>
        <div style="text-align: center">
          <el-button>取消</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  <script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
  </script>
  <style></style>