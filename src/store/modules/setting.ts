import { defineStore } from 'pinia'
import type { Setting } from './type'

const useSettingStore = defineStore('Setting', {
  state: (): Setting => {
    return {
      foldMenuState: false,
      refresh: false,
    }
  },
  actions: {},
  getters: {},
  persist: true,
})
export default useSettingStore
