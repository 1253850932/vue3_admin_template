<script setup lang="ts" name="Setting">
import { Loading, FullScreen, Setting, Rank } from '@element-plus/icons-vue'
import { ref } from 'vue'
import useSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const settingStore = useSettingStore()
const userStore = useUserStore()
const router = useRouter()
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
// 退出登录
const logout = async () => {
  try {
    await userStore.userLogout()
    ElMessage({
      message: '退出成功',
      type: 'success',
    })
    router.replace('/login')
  } catch (error) {
    ElMessage({
      message: error as string,
      type: 'warning',
    })
  }
}
// 颜色选择
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const colorChange = () => {
  const el = document.documentElement
  // 获取 css 变量
  getComputedStyle(el).getPropertyValue(`--el-color-primary`)
  // 设置 css 变量
  el.style.setProperty('--el-color-primary', color.value)
  console.log(color.value)
}
// 暗黑模式change
const dark = ref<boolean>(false)
const changeSwitch = () => {
  const html = document.documentElement
  dark.value ? html.classList.add('dark') : html.classList.remove('dark')
}
</script>

<template>
  <el-button :icon="Loading" circle @click="refresh" />
  <el-button :icon="full ? Rank : FullScreen" circle @click="fullScreen" />
  <el-popover
    placement="top-start"
    title="
    主题设置"
    :width="300"
    trigger="hover"
  >
    <el-from>
      <el-from-item>
        主题颜色：
        <el-color-picker
          v-model="color"
          show-alpha
          :predefine="predefineColors"
          @change="colorChange"
        />
        <br />
      </el-from-item>
      <el-from-item>
        暗黑模式：
        <el-switch
          class="mt-2"
          inline-prompt
          active-icon="Sunny"
          inactive-icon="Moon"
          @change="changeSwitch"
          v-model="dark"
        />
      </el-from-item>
    </el-from>
    <template #reference>
      <el-button :icon="Setting" circle />
    </template>
  </el-popover>

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
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<style scoped lang=""></style>
