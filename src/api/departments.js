import request from '@/utils/request'
// 查询组织架构列表
export const companyDepartment = () => {
  return request({
    url: '/company/department'
  })
}

// 获取员工简单列表
export const sysUserSimple = () => {
  return request({
    url: '/sys/user/simple'
  })
}

// 新增部门
export const companyDepartmentPost = data => {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

// 编辑部门
export const companyDepartmentPut = data => {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
