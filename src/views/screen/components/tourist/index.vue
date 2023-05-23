<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
const people = ref('215908人')
let chart = ref()
onMounted(() => {
  // 获取echarts实例
  const myChart = echarts.init(chart.value)
  myChart.setOption({
    title: {
      text: '水球图',
    },
    xAxis: {},
    yAxis: {},
    series: {
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      color: ['#29fcff'],
      itemStyle: {
        opacity: 0.6,
      },

      waveAnimation: true,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      animationDuration: 1000,
      animationDurationUpdate: 1000,
      radius: '100%',

      emphasis: {
        itemStyle: {
          opacity: 0.8,
        },
      },
    },
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
  <div class="tourist_container">
    <div class="title">
      <div class="title_Statistics">实时游客统计</div>
      <div class="title_bg"></div>
      <div class="title_total">
        可预约总量:
        <span>1111</span>
        人
      </div>
    </div>
    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>
    <div class="chart" ref="chart"></div>
  </div>
</template>
<style scoped lang="scss">
.tourist_container {
  background: url('../../images/dataScreen-main-lt.png') no-repeat;
  background-size: 100% 100%;
  .title {
    color: white;
    .title_Statistics {
      padding-top: 10px;
      margin-left: 10px;
      font-size: 20px;
    }
    .title_bg {
      width: 68px;
      height: 7px;
      margin-top: 5px;
      margin-left: 10px;

      background: url('../../images/dataScreen-title.png') no-repeat;
      background-size: cover;
    }
    .title_total {
      float: right;
      span {
        color: rosybrown;
      }
    }
  }
  .number {
    display: flex;
    margin-top: 30px;
    padding: 0 10px;
    width: 100%;
    span {
      flex: 1;
      height: 55px;
      text-align: center;
      line-height: 50px;
      color: #29fcff;
      font-size: 30px;
      background: url('../../images/total.png') no-repeat;
      background-size: cover;
    }
  }
  .chart {
    width: 100%;
    height: 270px;
  }
}
</style>
