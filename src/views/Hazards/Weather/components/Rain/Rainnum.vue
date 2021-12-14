<template>
  <div id="myChart"></div>
</template>
<script>
import * as echarts from "echarts";
// import { color } from 'echarts';
export default {
  name: "",
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
          grid:{
              left:40,
              bottom:20
          },
           legend: {
        data: ['降雨量'],
        right:10,
        top:30 , 
        // color:'white'

        },
        title: {
          text: "月多年平均降水量：67.4125",
          textStyle: {
            color: 'white'
          },
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
            name:'单位：次',
            max:10,
          type: "category",
        },
        series: [
          {
            name:'降雨量',
            data: [],
            type: "bar",
            label: {
            show: true,
            position: 'right',
           
        }
          },
        ],
      });
    },
  },
};

</script>
<style>
#myChart {
  width: 425px;
  height: 300px;
  
}
</style>