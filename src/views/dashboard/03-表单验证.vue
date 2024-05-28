<template>
  <div>
    <!--
    用户名:输入框
    密 码：输入框
          登录

    表单验证：
       1：el-form
               model:整个表单元素的值
               rules:绑定规则
               rules:{
                prop的值：[
                {required:true,message:'错误信息',trigger:'blur/change'},
                {min:最小长度,max:最大长度,message:'错误信息',trigger:'blur/change'},
                {pattern:正则表达式,message:'错误信息',trigger:'blur/change'}
                ]
               }
       2：el-form-item
               prop="表单元素值的字段名"

     全局表单验证
       el-form  ref='xxx'
       this.$refs.xxx.validate((result)=>{
        result:boolean
            true:验证通过
            false:验证失败
       })
    -->
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 3, max: 6, message: '请输入3-6个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 12, message: '请输入6-12个字符', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          {
            pattern: /^1[2-9]\d{9}$/,
            message: '请正确输入手机号',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((result) => {
        if (result) {
          console.log('验证通过')
        } else {
          console.log('验证失败')
        }
      })
    }
  }
}
</script>
<style></style>
