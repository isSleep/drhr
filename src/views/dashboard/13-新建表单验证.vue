<template>
    <div>
      <el-form label-width="100px" :model="form" :rules="rules">
        <!-- 规定：用自定义表单验证：用户名中一定要包含abc -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
      </el-form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        form: {
          username: ''
        },
        rules: {
          username: [
            {
              validator: (rule, value, callback) => {
                // rule:规则一般不用,value：当前验证项的值,callback：callback()验证通过 callback(new Error(错误信息))
                const bol = value.includes('abc')
                if (bol) {
                  callback()
                } else {
                  callback(new Error('用户名中不包含abc!'))
                }
              },
              trigger: 'change'
            }
          ]
        }
      }
    }
  }
  </script>
  <style></style>