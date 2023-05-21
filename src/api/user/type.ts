// 登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}
// 定义所有接口返回数据类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}
// 服务器返回用户信息数据类型
export interface userResponseData extends ResponseData {
  code: number
  data: {
    name: string
    avatar: string
    roles: string[]
    routes: string[]
    buttons: string[]
  }
}
export type userLoginOut = loginResponseData
