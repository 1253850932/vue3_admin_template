import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/token'
import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './type'
import { constantRoute } from '@/router/routes'

// 创建用户小仓库
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken('token') || '',
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: loginForm) {
      const user: loginResponseData = await reqLogin(data)
      if (user.code === 200) {
        setToken('token', user.data.token)
        this.token = user.data.token
        return Promise.resolve('用户登录成功')
      } else {
        return Promise.reject(user.data.message)
      }
    },
    // 用户信息
    async getUserInfo() {
      const res = await reqUserInfo()
      if (res.code === 200) {
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
        console.log(this)
      }
    },
  },
  getters: {},
})
export default useUserStore
