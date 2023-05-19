<script setup lang="ts" name="Setting">
import { Loading, FullScreen, Setting, Rank } from '@element-plus/icons-vue'
import { ref } from 'vue'
import useSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
const settingStore = useSettingStore()
const userStore = useUserStore()
const refresh = (): void => {
  settingStore.refresh = !settingStore.refresh
}
const full = ref<boolean>(false)
const fullScreen = (): void => {
  if (!document.fullscreenElement) {
    full.value = true
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
    full.value = false
  }
}
</script>

<template>
  <el-button :icon="Loading" circle @click="refresh" />
  <el-button :icon="full ? Rank : FullScreen" circle @click="fullScreen" />
  <el-button :icon="Setting" circle />

  <img
    :src="userStore.avatar"
    style="width: 30px; height: 30px; margin: 0 10px; border-radius: 50%"
  />
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style scoped lang=""></style>
