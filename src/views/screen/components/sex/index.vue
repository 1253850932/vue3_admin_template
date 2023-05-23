<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
const chart = ref()
onMounted(() => {
  const myEcharts = echarts.init(chart.value)
  myEcharts.setOption({
    title: {
      text: '男女比例', //主标题
      //主标题颜色
      textStyle: {
        color: 'skyblue',
      },
      left: '40%',
    },
    xAxis: { show: false, min: 0, max: 100 },
    yAxis: { show: false, type: 'category' },
    series: [
      {
        type: 'bar',
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: '#007afe',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        //调整女士柱条位置
        barGap: '-100%',
        itemStyle: {
          color: '#ff4b7a',
          borderRadius: 20,
        },
      },
    ],
    grid: {
      top: 0,
      left: '25%',
      right: 0,
      bottom: 0,
      width: '50%',
    },
  })
})
</script>

<template>
  <div class="sex_container">
    <div class="sex_title">
      <div>男女比例</div>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex_container">
      <div class="man">
        <div>男生</div>
        <img src="../../images/man.png" alt="" />
      </div>
      <div class="woman">
        <div>女生</div>
        <img src="../../images/woman.png" alt="" />
      </div>
    </div>
    <div class="echarts" ref="chart"></div>
  </div>
</template>
<style scoped lang="scss">
.sex_container {
  background: url('../../images/dataScreen-main-lt.png') no-repeat;
  background-size: 100% 100%;
  .sex_title {
    color: white;
    margin-left: 10px;
    font-size: 20px;
    margin-top: 10px;
  }
  .sex_container {
    display: flex;
    justify-content: center;
    .man {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px;
      width: 111px;
      height: 115px;
      background: url('../../images/man-bg.png') no-repeat;
      background-size: 100% 100%;
      div {
        color: #007afe;
        font-size: 20px;
        margin-bottom: 30px;
      }
    }
    .woman {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px;
      width: 111px;
      height: 115px;
      background: url('../../images/man-bg.png') no-repeat;
      background-size: 100% 100%;
      div {
        color: #ff4b7a;
        font-size: 20px;
        margin-bottom: 30px;
      }
    }
  }
  .echarts {
    width: 100%;
    height: 100px;
  }
}
</style>
