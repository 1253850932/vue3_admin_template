import { reqLogin, reqUserInfo, reqUserLogout } from '@/api/user'
import { clearToken, getToken, setToken } from '@/utils/token'
import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './type'
import { constantRoute } from '@/router/routes'

// 创建用户小仓库
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken('token') || null,
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: loginForm) {
      const user: loginResponseData = await reqLogin(data)
      console.log(user)
      if (user.code === 200) {
        setToken('token', user.data)
        this.token = user.data
        return Promise.resolve(user.message)
      } else {
        return Promise.reject(user.message)
      }
    },
    // 用户信息
    async getUserInfo() {
      const res = await reqUserInfo()
      if (res.code === 200) {
        this.username = res.data.name
        this.avatar = res.data.avatar
      }
    },
    // 退出登录
    async userLogout() {
      const res = await reqUserLogout()
      if (res.code === 200) {
        this.username = ''
        this.avatar = ''
        this.token = ''
        clearToken()
        return Promise.resolve(res.message)
      } else return Promise.reject(res.message)
    },
  },
  getters: {},
  persist: true,
})
export default useUserStore
