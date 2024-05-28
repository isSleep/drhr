<template>
    <el-dialog title="新增用户" :visible.sync="show" width="600px">
      <div>我是新增弹窗内容</div>
      <template #footer>
        <div style="text-align: center">
          <el-button @click="show = false">取消</el-button>
          <el-button>确定</el-button>
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