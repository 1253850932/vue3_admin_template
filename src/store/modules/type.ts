// user仓库数据类型
import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string | null
  avatar: string | undefined
}
export interface Setting {
  foldMenuState: boolean
  refresh: boolean
}
