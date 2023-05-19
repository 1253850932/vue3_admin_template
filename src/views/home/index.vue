<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { onMounted } from 'vue'
const userStore = useUserStore()
onMounted(() => {
  userStore.getUserInfo()
})
</script>
<template>
  <div class="">首页</div>
</template>
<style scoped lang=""></style>
