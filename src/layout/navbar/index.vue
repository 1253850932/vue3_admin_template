<script setup lang="ts" name="Navbar">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<template>
  <div class="navbar_contanier">
    <div class="navbar_left">
      <BreadCrumb />
    </div>
    <div class="navbar_right">
      <Setting />
    </div>
  </div>
</template>
<style scoped lang="scss">
.navbar_contanier {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-left: 10px;

  .navbar_left {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .navbar_right {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 30px;
  }
}
</style>
