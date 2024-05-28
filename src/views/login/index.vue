<template>
  <div class="login">
    <div class="box">
      <img src="@/assets/common/login-logo.png" alt="">
      <el-form ref="form" :model="form" :rules="rules" class="form">
        <el-form-item prop="mobile">
          <el-input
            v-model="form.mobile"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入手机号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            @keyup.enter.native="submit"
          />
          <!-- .native修饰符，让组件标签可以使用原生的事件 -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { sysLogin } from '@/api/user'
export default {
  data() {
    return {
      form: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请正确输入手机号',
            trigger: 'change'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 24, message: '请输入6-24位密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(async(result) => {
        if (result) {
          console.log('验证通过')
          const res = await sysLogin(this.form)
          // res.success===true请求成功 false:请求失败
          // if (res.success)
          console.log('登录接口返回值', res)
          // 存储用户token以供全局使用  vuex
          this.$store.commit('user/setToken', res.data)
          // 登录成功
          this.$message.success('登录成功')
          // 路由跳转到首页  this.$router.push('path地址')
          this.$router.push('/')
          // } else {
          //    this.$message.error(res.message)
          // }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
// 加了scoped想管到组件内的class时  ::v-deep 想管的class {....}
.login {
  // css内要用~@代表src
  background-image: url('~@/assets/common/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  // 100vw  整个屏幕宽度   100vh:整个屏幕高度
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 600px;
    // background-color: #fff;
    text-align: center;
    .btn {
      width: 100%;
      height: 60px;
      font-size: 20px;
      background-color: #407ffe;
    }
  }
  .form {
    margin-top: 20px;
    ::v-deep .el-input__inner {
      height: 60px;
      background-color: #d4e5ff;
    }
  }
  ::v-deep .el-form-item__error {
    color: #fff;
  }
}
</style>
