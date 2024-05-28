import router from '@/router' // this.$router
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store' // store===this.$store
Nprogress.configure({ showSpinner: false })
// nprogress  :进度条插件
// 1:下载插件  npm i nprogress -f
// 2:导入  import Nprogress from 'nprogress'  import 'nprogress/nprogress.css'
// 3:使用  开始  Nprogress.start()      结束   Nprogress.done()

// 前置守卫：所有路由的跳转都要通过它
// 白名单页面
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  Nprogress.start()
  // to:你要去的页面路由情况
  // from:你从哪个页面路由过来
  // next()  代表正常通过
  // next('path地址') 让它跳转到其它页面
  console.log('beforeEach', to)
  /*
   是否登录（是否有token）
       有token
            判断要去的页面是不是登录页
                 是登录页
                     跳转到首页
                  非登录页
                     正常进入
       没有token
           进入的是否白名单(不需要登录就可访问的页面)页面
               是白名单页面
                   正常进入
                非白名单页面
                   跳转到登录页
*/
  if (store.state.user.token) {
    // 有token情况
    if (to.path.toLowerCase() === '/login') {
      next('/')
    } else {
      // 登录完进入相应页面前调用接口获取用户信息
      if (!store.state.user.userInfo.userId) {
        console.log(1)
        await store.dispatch('user/getUserInfo')
      }
      next()
      console.log(2)
    }
  } else {
    // to.path  是否在白名单数组中
    if (whiteList.includes(to.path.toLowerCase())) {
      next()
    } else {
      next('/login')
    }
  }

  // next()
  //   next('/login')
})

// 后置守卫
router.afterEach((to, from) => {
  // to:当前所处页面路由
  // from:从哪个页面过来的
  document.title = to.meta.title
  console.log('afterEach')
  Nprogress.done()
})
