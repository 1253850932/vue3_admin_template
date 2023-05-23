<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Top from './components/top/index.vue'
import Age from './components/age/index.vue'
import Sex from './components/sex/index.vue'
import Tourist from './components/tourist/index.vue'
// 获取数据大屏展示dom元素
const screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<template>
  <div class="screen_root">
    <div class="screen" ref="screen">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="center">中间</div>
        <div class="right">右边</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.screen_root {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;
  .screen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: left top;
    width: 1980px;
    height: 1080px;
    .top {
      width: 100%;
      height: 40px;
    }
    .bottom {
      display: flex;
      .right {
        flex: 1;
      }
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 1040px;
        .sex {
          flex: 1;
        }
        .tourist {
          flex: 1.2;
        }
        .age {
          flex: 1;
        }
      }
      .center {
        flex: 2;
      }
    }
  }
}
</style>
