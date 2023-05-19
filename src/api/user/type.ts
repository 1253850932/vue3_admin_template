// 登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}
// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: {
    token: string
    message?: string
  }
}
// 服务器返回用户信息数据类型
export interface userResponseData {
  code: number
  data: {
    checkUser: {
      userId: number
      avatar: string
      username: string
      password: string
      desc: string
      roles: string[]
      routes: string[]
      buttons: string[]
      token: string
    }
  }
}
