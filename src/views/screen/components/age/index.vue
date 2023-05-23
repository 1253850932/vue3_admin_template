<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
const charts = ref()
onMounted(() => {
  const myEcharts = echarts.init(charts.value)
  myEcharts.setOption({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      right: 30,
      top: 40,
      orient: 'vertical', //图例组件方向的设置
      textStyle: {
        color: 'white',
        fontSize: 14,
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'inside',
          color: 'white',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '军事' },
          { value: 735, name: '新闻' },
          { value: 580, name: '直播' },
          { value: 484, name: '娱乐' },
          { value: 300, name: '财经' },
        ],
      },
    ],
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  })
})
</script>

<template>
  <div class="age_container">
    <div class="age_title">
      <div>年龄比例</div>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>
<style scoped lang="scss">
.age_container {
  background: url('../../images/dataScreen-main-lt.png') no-repeat;
  background-size: 100% 100%;
  .age_title {
    color: white;
    margin-left: 10px;
    font-size: 20px;
    margin-top: 10px;
  }
  .charts {
    height: 300px;
  }
}
</style>
