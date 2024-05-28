import request from '@/utils/request'

export const sysLogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data: data
  })
}
