<script setup lang="ts" name="Menu">
import { useRouter } from 'vue-router'
defineProps(['menuList'])
const router = useRouter()
const goRoute = (e: any) => {
  console.log(e)
  router.push(e.index)
}
</script>
<script lang="ts">
export default {
  name: 'MenuList',
}
</script>
<template>
  <template v-for="item in menuList" :key="item.path">
    <!--没有子路由-->
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
        v-if="!item.meta.hidden"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由但是只有一个子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且个数大于一个1 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
      @click="goRoute"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuList :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>
<style scoped lang="scss"></style>
