import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
// 统一设置接口基地址
const request = axios.create({
  // 接口基地址：开发环境   生产环境
  // 环境变量：
  // 代码会识别当前是什么环境，如果是开发环境就使用开发环境的一些变量值.....
  // 配制开发环境与生产环境的变量值
  // 开发环境
  // 1：项目的根目录创建 .env.development文件
  // 2：设置开发环境变量值 VUE_APP_URL="变量值"
  // 访问:process.env.VUE_APP_URL
  // 生产环境
  // 1：项目的根目录创建 .env.production文件
  // 2：设置开发环境变量值 VUE_APP_URL="变量值"
  // 访问:process.env.VUE_APP_URL
  baseURL: process.env.VUE_APP_URL
  // baseURL: 'https://ihrm-java.itheima.net/api'
})
// 请求拦截
request.interceptors.request.use(
  config => {
    // config.url += '?lang=en'
    // console.log('config', config)
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截
request.interceptors.response.use(
  // 状态码为2开头 200-299之前
  res => {
    // res.data.message = '登录失败'
    // console.log(res,1111)
    if (res.data.success) {
      return res.data
    } else {
      // 错误提示
      Message.error(res.data.message)
      // 终止接口请求
      // 抛出一个错误
      return Promise.reject(new Error(res.data.message))
    }
  },
  // 状态码非2开头
  err => {
    // token失效处理
    // if(token失效了){  1:提示一下错误信息 2：删除token,删除用户信息 3:跳转到登录页   }
    if (err.response && err.response.status === 401) {
      Message.error(err.response.data.message)
      store.commit('user/logout')
      router.push('/login')
    }
    console.log([err])
    return Promise.reject(err)
  }
)

export default request
