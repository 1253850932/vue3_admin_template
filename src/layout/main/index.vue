<script setup lang="ts" name="Main">
import useSettingStore from '@/store/modules/setting'
import { watch, ref, nextTick } from 'vue'
const settingStore = useSettingStore()
const refresh = ref(true)
watch(
  () => settingStore.refresh,
  () => {
    refresh.value = false
    nextTick(() => {
      refresh.value = true
    })
  },
)
</script>

<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="refresh" />
    </transition>
  </router-view>
</template>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
