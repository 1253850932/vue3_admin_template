// 定义所有接口返回数据类型
interface ResponseData {
  code: number
  message: string
  ok: boolean
}
export interface records {
  id?: number
  logoUrl: string
  tmName: string
}
export interface resTrademarkPaging extends ResponseData {
  data: {
    records: records[]
    pages: number
    total: number
    hitCount: boolean
    current: number
    searchCount: boolean
    size: number
  }
}
