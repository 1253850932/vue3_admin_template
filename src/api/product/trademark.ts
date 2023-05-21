import request from '@/utils/request'
import type { resTrademarkPaging, records } from './type'
enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  UPDATE_TRADEMARK = '/admin/product/baseTrademark/update',
  ADD_TRADEMARK = '/admin/product/baseTrademark/save',
}
const reqHasTrademark = (page: number, limit: number) => {
  return request<any, resTrademarkPaging>({
    url: API.TRADEMARK_URL + `${limit}/${page}`,
    method: 'get',
  })
}
/**
 * @param {*} url  修改/添加 请求接口
 * @param {*} params 请求参数
 * @param {*} method 请求方式 put / POST
 * @param {*} contentType 内容类型
 * @param {*} needLoading  是否需要loading
 * @param {*} needIntercept  是否需要添加拦截
 */
const reqAddOrUpdateTrademark = (data: records) => {
  console.log(data)
  // 修改品牌
  if (data.id === undefined) {
    return request<any>({
      url: API.ADD_TRADEMARK,
      data,
      method: 'post',
    })
  } else {
    // 新增品牌
    return request<any>({
      url: API.UPDATE_TRADEMARK,
      data,
      method: 'put',
    })
  }
}
export { reqHasTrademark, reqAddOrUpdateTrademark }
