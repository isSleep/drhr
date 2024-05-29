<template>
    <!-- el-tabs
            v-model="子项的name的值"  默认打开谁
          el-tab-pane
              label:标题
              name:与v-model值对应
  
      增删改    查（表格）
      el-table
         data:整个表格的数据
         el-table-column
            label:标题
            width:宽度
            prop:这一列需要渲染的数据的字段名
            type="index" 序号
            默认插槽下的作用域插槽
              row:当前行数据
              $index：数据的下标，从0开始
  -->
  
    <div>
      <!-- 需求：  首页  公司介绍   联系我们 -->
      <el-tabs v-model="active">
        <el-tab-pane label="首页" name="a">首页</el-tab-pane>
        <el-tab-pane label="公司介绍" name="b">公司介绍</el-tab-pane>
        <el-tab-pane label="联系我们" name="c">联系我们</el-tab-pane>
      </el-tabs>
      <hr>
      <el-table :data="list" border>
        <el-table-column label="序号" width="50px" type="index" />
        <el-table-column label="日期" width="200px" prop="date" />
        <el-table-column label="姓名" width="200px" prop="name" />
        <el-table-column label="地址" prop="address" />
        <el-table-column label="操作">
          <template v-slot="{ row, $index }">
            <div>{{ row }}---{{ $index }}</div>
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        active: 'b',
        list: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    }
  }
  </script>
  <style></style>