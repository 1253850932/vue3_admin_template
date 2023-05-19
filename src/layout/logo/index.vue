<script setup lang="ts" name="Logo">
import Setting from '@/setting'
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()
</script>

<template>
  <div class="logo">
    <img :src="Setting.logo" alt="" />
    <h1 v-if="!settingStore.foldMenuState">{{ Setting.title }}</h1>
  </div>
</template>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $logo-height;
  padding-top: 10px;

  img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    vertical-align: middle;
    border-radius: 50%;
  }

  h1 {
    display: inline-block;
    margin-left: 5px;
    font-size: $logo-title-font-size;
    font-weight: 600;
    color: white;
    text-align: center;
  }
}
</style>
