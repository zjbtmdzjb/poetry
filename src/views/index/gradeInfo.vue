<template>
  <el-card class="grade">
    <div slot="header" class="clearfix">
      <span>成绩统计</span>
      <el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-bar-chart"></i></el-button>
    </div>
    <div id="chartBar" style="width:100%; height:330px;"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {}
  },
  methods: {
    drawChart () {
      this.chartBar = echarts.init(document.getElementById('chartBar'))
      this.chartBar.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '30px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: '平均成绩',
            type: 'bar',
            barWidth: '30%',
            data: [66, 69, 80, 87, 75, 90]
          }
        ]
      })
    }
  },
  mounted () {
    this.drawChart()
  },
  updated () {
    this.drawChart()
  }
}
</script>

<style lang="scss" scoped>
.grade {
  height: 425px;
  color: #657180;
  box-shadow: none;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
