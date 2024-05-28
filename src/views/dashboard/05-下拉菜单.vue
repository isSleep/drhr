<template>
    <div>
      <!-- 下拉菜单
           el-dropdown
               默认插槽：默认显示内容
               具名插槽：dropdown
                   el-dropdown-menu
                      el-dropdown-item
  
  -->
      <!-- 需求：选择省份：广东省，广西省  ,湖北省 -->
      <el-dropdown trigger="click">
        <span>选择省份</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>广东省</el-dropdown-item>
            <el-dropdown-item>广西省</el-dropdown-item>
            <el-dropdown-item>湖北省</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </template>
  <script>
  export default {}
  </script>
  <style></style>