<template>
    <!-- el-dialog
            title:标题
            visible.sync:是否打开弹窗
            width:宽度
               默认插槽：主体内容
               具名插槽:footer
                       一般用于弹窗最下面的按钮
  
    -->
    <div>
      <el-button @click="$refs.add.show = true">打开弹窗</el-button>
      <addCom ref="add" />
      <!-- this.show=true/false
      ref:获取原生标签dom  获取组件标签this
      用法：
         <xxx ref='aaa' />
         this.$refs.aaa===xxx组件内的this
      -->
    </div>
  </template>
  <script>
  import addCom from './components/addCom.vue'
  export default {
    components: {
      addCom
    },
    data() {
      return {}
    }
  }
  </script>
  <style></style>