<template>
    <div id="text">
         <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-option="pickerOptions"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    <div id="RainCharts"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    name:'simple03',
    data(){
        return{
            pickerOptions:{
                shortcuts:[{
                    text:'最近十年',
                    onClick(picker){
                        const end =new Date();
                        const start =new Date();
                        start.srtTime(start.getTime() - 3600*1000*24*3650);
                        picker.$emit('pick',[start,end])
                    }
                }]
            },
            value2:''
        }
    },
    mounted(){
        this.DrewLine();
    },
    methods:{
         DrewLine(){
             let RainCharts = echarts.init(document.getElementById('RainCharts'))
             RainCharts.setOption({
                 grid:{
                     lest:120,
                     bottom:20
                 },
                 title:{},
                 xAxis:{
                     type:'category',
                     data:[],
                 },
                 yAxis:{
                     neme:'单位：次',
                     type:'category',
                 },
                 series:[
                     {
                         neme:'暴雨次数',
                         data:[],
                         type:'bar'
                     },
                 ],
             })
         }   
    }
}
</script>
<style>
#RainCharts{
     width: 425px;
  height: 300px;
  margin-left: 31px;
  margin-top: -20px;
}
</style>