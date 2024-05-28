<template>
    <div style="padding: 20px">
      <!--
      el-tree
         data:树形数据 [{label:'标题',children:[....]}]
       需求：广东省
                广州市
                    白云区
                    天河区
                    从化区
                深圳市
      -->
      <!-- el-tree默认是找树形数据内的label与children -->
      <!-- props:{label:'需要显示内容的字段名',children:'子集字段名'} -->
      <!-- el-tree有插槽的，它是默认插槽下的作用域插槽  {node:组件内的所有字段,data:当前点击项对应数据} -->
      <!-- <el-tree :data="list" :props="{ label: 'name', children: 'child' }" /> -->
      <el-tree :data="list" :props="{ label: 'name', children: 'child' }">
        <template v-slot="{ node, data }">
          <div class="item">
            <div class="left">{{ data.name }}</div>
            <el-button
              size="small"
              class="right"
              @click="add(node, data)"
            >添加</el-button>
          </div>
        </template>
      </el-tree>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        list: [
          {
            name: '广东省',
            child: [
              {
                name: '广州市',
                child: [
                  {
                    name: '白云区'
                  },
                  { name: '天河区' },
                  { name: '从化区' }
                ]
              },
              {
                name: '深圳市'
              }
            ]
          }
        ]
      }
    },
    methods: {
      add(node, data) {
        console.log(node, data)
      }
    }
  }
  </script>
  <style>
  .item {
    width: 500px;
    display: flex;
    justify-content: space-between;
  }
  </style>