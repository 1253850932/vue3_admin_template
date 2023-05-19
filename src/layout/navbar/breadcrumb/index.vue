<script setup lang="ts" name="Breadcrumb">
import useSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
const route = useRoute()
const settingStore = useSettingStore()
const changeFold = () => {
  settingStore.foldMenuState = !settingStore.foldMenuState
}
</script>
<template>
  <el-icon :size="25" style="margin-right: 10px" @click="changeFold">
    <component :is="settingStore.foldMenuState ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="i in route.matched"
      :key="i.path"
      v-show="i.meta.title"
      :to="i.path"
    >
      {{ i.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped lang=""></style>
