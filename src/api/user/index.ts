import request from '@/utils/request'
import type {
  loginForm,
  loginResponseData,
  userResponseData,
  userLoginOut,
} from './type'

// 统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
/**
 * @param {*} url 登录接口方法
 * @param {loginForm} params  data
 * @param {*} method 请求方式  POST
 * @param {*} contentType 内容类型
 * @param {*} needLoading  是否需要loading
 * @param {*} needIntercept  是否需要添加拦截
 */
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

/**
 * @param {*} url 获取用户信息接口
 * @param {*} params 请求参数
 * @param {*} method 请求方式 GET
 * @param {*} contentType 内容类型
 * @param {*} needLoading  是否需要loading
 * @param {*} needIntercept  是否需要添加拦截
 */
export const reqUserInfo = () =>
  request<any, userResponseData>({
    url: API.USERINFO_URL,
    method: 'GET',
  })
/**
 * @param {*} url 退出登录 请求接口
 * @param {*} params 请求参数
 * @param {*} method 请求方式 GET / POST
 * @param {*} contentType 内容类型
 * @param {*} needLoading  是否需要loading
 * @param {*} needIntercept  是否需要添加拦截
 */
export const reqUserLogout = () => {
  return request<any, userLoginOut>({
    url: API.LOGOUT_URL,
    method: 'post',
  })
}
