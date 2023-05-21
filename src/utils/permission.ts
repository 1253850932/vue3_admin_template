// 路由鉴权
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from '@/store/modules/user'

// 全局前置守卫
router.beforeEach((to: any, form: any, next: any) => {
  const userStore = useUserStore()
  document.title = to.meta.title
  // nprogress.start()
  // 登录状态
  if (userStore.token) {
    // 登录成功，放行首页
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    console.log(to)
    // 未登录状态
    if (to.path === '/login') {
      console.log(1)
      next()
    } else {
      console.log(2)

      next('/login')
    }
  }
  NProgress.start()
})
// 全局后置守卫
router.afterEach(() => {
  NProgress.done()
})
