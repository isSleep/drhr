import { sysProfile, sysUser } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 持久化：1：值修改了存储到浏览器 2：初始值读取浏览器存储
    // vuex持久化插件 vuex-persistedstate
    // 1:下载安装  npm i vuex-persistedstate -f
    // 2:导入，在store/index.js导入  import persistedstate from 'vuex-persistedstate'
    // 3:配制使用  plugins:[persistedstate({paths:['模块名.字段名']})]
    // token: localStorage.getItem('token') || ''
    token: '',
    userInfo: {}
  },
  mutations: {
    setToken(state, value) {
      state.token = value
      // localStorage.setItem('token', value)
      // localStorage.setItem(key,value)
      // localStorage.getItem(key)
      // localStorage.removeItem(key)
    },
    setUserInfo(state, value) {
      state.userInfo = value
    },
    // 删除token与用户信息
    logout(state) {
      state.token = ''
      state.userInfo = {}
    }
  },
  getters: {},
  actions: {
    // 获取用户信息
    async getUserInfo(store) {
      const res = await sysProfile()
      const res2 = await sysUser(res.data.userId)
      store.commit('setUserInfo', { ...res.data, ...res2.data })
      // console.log('用户信息2', res2.data)
      // console.log(3)
    }
  }
}
