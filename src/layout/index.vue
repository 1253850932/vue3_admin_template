<script setup lang="ts" name="Layout">
import { useRoute } from 'vue-router'
import MenuList from './menu/index.vue'
import Navbar from './navbar/index.vue'
import Main from './main/index.vue'
import useUserStore from '@/store/modules/user'
import Logo from './logo/index.vue'
import useSettingStore from '@/store/modules/setting'
const $route = useRoute()
const useStore = useUserStore()
const settingStore = useSettingStore()
const routes = useStore.menuRoutes
</script>

<template>
  <div class="layout">
    <!-- 菜单组件-->
    <div
      class="menu_container"
      :class="{ fold: settingStore.foldMenuState ? true : false }"
    >
      <el-menu
        background-color="#001529"
        text-color="white"
        active-text-color="yellowgreen"
        unique-opened
        :default-active="$route.path"
        :collapse="settingStore.foldMenuState ? true : false"
      >
        <Logo />

        <!--根据路由动态生成菜单-->
        <MenuList :menuList="routes" />
      </el-menu>
    </div>
    <div
      class="navbar"
      :class="{ fold: settingStore.foldMenuState ? true : false }"
    >
      <Navbar />
    </div>
    <div
      class="layout_main"
      :class="{ fold: settingStore.foldMenuState ? true : false }"
    >
      <Main />
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;

  .menu_container {
    display: inline-block;
    width: $menu-width;
    height: 100vh;
    background-color: $menu-background-color;
    transition: all 0.3s;

    &.fold {
      width: $menu-fold-width;
    }
  }

  .navbar {
    position: fixed;
    top: 0;
    left: $menu-width;
    width: calc(100% - $menu-width);
    height: $tabbar-height;
    background-color: $tabbar-background-color;
    transition: all 0.3s;

    &.fold {
      left: $menu-fold-width;
      width: calc(100% - $menu-fold-width);
    }
  }

  .layout_main {
    position: absolute;
    top: $tabbar-height;
    left: $menu-width;
    width: calc(100% - $menu-width);
    height: calc(100vh - $tabbar-height);
    overflow: scroll;
    background-color: aqua;
    transition: all 0.3s;

    &.fold {
      left: $menu-fold-width;
      width: calc(100% - $menu-fold-width);
    }
  }
}
</style>
