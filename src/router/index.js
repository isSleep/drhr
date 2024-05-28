import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

/*
1：如果路由项配制了hidden: true,该项不会在菜单上显示
2：如果是子集路由，且子集hidden不为true的项有一个以上，会显示二级菜单
*/
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录页' },
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    meta: { title: '404' },
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        // component: () => {return import('@/views/dashboard/index')},
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/employees',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1.相对路由地址（相对于父路由）
        // 子paht: xxx 父: /abc 子路由地址： /abc/xxx  2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/employees'), // 懒加载
        meta: { title: '员工', icon: 'people' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/setting'),
        meta: { title: '公司设置', icon: 'setting' }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/permission'),
        meta: { title: '权限管理', icon: 'lock' }
      }
    ]
  },
  {
    path: '/social',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/social'),
        meta: { title: '社保', icon: 'table' }
      }
    ]
  },
  {
    path: '/approvals',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/approvals'),
        meta: { title: '审批', icon: 'tree-table' }
      }
    ]
  },
  {
    path: '/attendances',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/attendances'),
        meta: { title: '考勤', icon: 'skill' }
      }
    ]
  },
  {
    path: '/salarys',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/salarys'),
        meta: { title: '工资', icon: 'money' }
      }
    ]
  },
  {
    path: '/departments',
    component: Layout,
    children: [
      {
        // 二级路由path:
        // 1:相对（相对于自己的父级路由地址）路由地址
        // 子path：xxx   父：/abc   子的路由地址： /abc/xxx     2：绝对路由地址  子path：/xxx   父：/abc     子路由地址:/xxx
        path: '',
        component: () => import('@/views/departments'),
        meta: { title: '组织架构', icon: 'tree' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
