<template>
    <div>
      <!-- 确认框组件
     this.$confirm(确认框的内容,标题，{
      可配制取消与确定的按钮文本内容
      confirmButtonText:'确定按钮文本',
      cancelButtonText:'取消按钮文本',
      type:'图标类型'
     }).then(()=>{
      // 用户点击了确定
     }).catch(()=>{
      // 用户点击了取消
     })
  -->
      <el-button @click="btnClick">删除</el-button>
    </div>
  </template>
  <script>
  import axios from 'axios'
  
  export default {
    methods: {
      async btnClick() {
        // Promise() // 对象
        // 它有二方法，.then  .catch
        // axios({
        //   url: 'http://localhost:3000/api/sys/login',
        //   method: 'post'
        // })
        //   .then((res) => {
        //     console.log('成功返回值', res)
        //   })
        //   .catch((err) => {
        //     console.log('错误信息', err)
        //   })
        // try {
        //   const res = await axios({
        //     url: 'http://localhost:3000/api/sys/login',
        //     method: 'post'
        //   })
        //   console.log('成功返回值', res)
        // } catch (err) {
        //   console.log('错误信息', err)
        // }
  
        this.$confirm('您确定删除该条数据吗?', '温馨提示', {
          confirmButtonText: '确定删除',
          cancelButtonText: '点错了'
        })
          .then(() => {
            console.log('用户点击了确定按钮后执行')
          })
          .catch(() => {
            console.log('用户点击了取消按钮后执行')
          })
        // try {
        // await this.$confirm('您确定删除该条数据吗?', '温馨提示')
        // console.log('用户点击了确定按钮后执行')
        // } catch {
        //   console.log('用户点击了取消按钮后执行')
        // }
      }
    }
  }
  </script>
  <style></style>