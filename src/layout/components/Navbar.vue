<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <div class="info">东软 <span class="tip">体验版</span></div>
    <el-dropdown>
      <div class="userinfo">
        <!-- 需求：图片错误时给一个默认图片显示替换 -->
        <img v-errorimg="icon" class="avatar" alt="">
        <!-- <img v-errorimg="icon" class="avatar" src="userInfo.staffPhoto" alt=""> -->
        <span class="username">{{ userInfo.username }}</span>
        <i class="el-icon-caret-bottom" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click.native="goHome">首页</el-dropdown-item>
          <el-dropdown-item @click.native="goGit">项目地址</el-dropdown-item>
          <el-dropdown-item divided @click.native="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Hamburger from '@/components/Hamburger'
import icon from '@/assets/common/img.jpeg'

export default {
  components: {
    Hamburger
  },
  data() {
    return {
      icon: icon
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    // ...{
    //   username() {
    //     return this.$store.state.user.userInfo.username
    //   },
    //   workNumber() {
    //     return this.$store.state.user.userInfo.workNumber
    //   }
    // }
    ...mapState('user',['userInfo','token'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    goHome() {
      // 跳转到首页
      this.$router.push('/')
    },
    goGit() {
      location.href = 'https://gitee.com/dhf481229/drhr'
    },
    exit() {
      this.$confirm('您确定退出网站嘛？', '提示')
        .then(() => {
          console.log('点击了确定')
          // 删除token与用户信息
          this.$store.commit('user/logout')
          // 提示用户
          this.$message.success('退出登录成功')
          // 跳转到登录页
          this.$router.push('/login')
        })
        .catch(() => {})
      // 删除token
      // 提示一下
      // 跳转到登录页
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background-color: #4070f9;
  display: flex;
  align-items: center;
  color: #fff;
  .hamburger-container {
    ::v-deep svg {
      fill: #fff;
    }
  }
  .info {
    flex: 1;
    font-size: 14px;
    .tip {
      padding: 6px;
      font-size: 12px;
      background-color: #84a9fe;
      border-radius: 8px;
      margin-left: 15px;
    }
  }
  .userinfo {
    display: flex;
    align-items: center;
    padding-right: 15px;
    color: #fff;
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .username {
      padding: 0 10px;
    }
  }
}
</style>
