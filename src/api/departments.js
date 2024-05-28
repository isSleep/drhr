import request from '@/utils/request'
// 查询组织架构列表
export const companyDepartment = () => {
  return request({
    url: '/company/department'
  })
}
