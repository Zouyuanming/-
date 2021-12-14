<template>
    <div id="Date">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-option="pickerOptions"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    <div id="raineCharts"></div>
    </div>
</template>
<script>
import * as echarts from "echarts";
export default {
    name:'',
    data(){
        return{
            pickerOptions:{
                 shortcuts:[{
                       tetx:'最近十年' ,
                       onClick(picker){
                           const end =new Date();
                           const start = new Date();
                           start.setTime(start.getTime() - 3600 * 1000 * 24 *3650);
                           picker.$emit('pick',[start,end])
                       }
                 }]
            },
            value2:''
        }
    },
    mounted(){
        this.DrawLine();
    },
    methods:{
        DrawLine(){
             let raineCharts = echarts.init(document.getElementById("raineCharts"));
             raineCharts.setOption({
                 grid:{
                     lest:60,
                     bottom:20
                 },
                   title:{},
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
            name:'降雨次数',
            data: [],
            type: "bar",
          },
        ],
             })
        }
    }
}
</script>
<style>
.el-date-editor .el-range-separator {
    color: #ffffff;
}
#raineCharts{
        position: relative;
    width: 425px;
    height: 260px;
    padding: 0px;
    margin: 0px;
    border-width: 0px;
    cursor: default;
    margin-left: 43px;
}
#Date{
    width:425px ;
    height: 300px;}

.el-range-editor.el-input__inner {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 3px 10px;
    margin-left: 49px;
    padding: 0;
}
.el-date-editor .el-range__icon {
    display: none;
}
.el-range-editor .el-range-input {
    line-height: 1;
    width: 88px;
    border: 1px solid #0080CC;
    height: 36px;
    background: none;
    border-radius: 5px;
}
.el-range-editor.el-input__inner {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    margin-left: 74px;
    background: none;
    padding: 0;
    border: none;
}


</style>