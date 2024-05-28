import request from '@/utils/request'
import store from '@/store'
// 登录接口
export const sysLogin = data => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

// 获取用户基本信息
export const sysProfile = () => {
  return request({
    url: '/sys/profile',
    method: 'post',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    }
  })
}

// 调用接口：1定义api 2:导入  3：调用存储数据
// 获取员工基本信息
export const sysUser = id => {
  return request({
    url: '/sys/user/' + id
  })
}
