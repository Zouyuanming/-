<template>
    <panel-widget :title="title" :close-visible="false">
        <div class="wind">
         <el-radio-group v-model="radio1">
      <el-radio-button label="Rainlist">暴雨次数</el-radio-button>
      <el-radio-button label="Rainnum">多年平均降水量</el-radio-button>
      <el-radio-button label="Rainhistory">历年暴雨次数</el-radio-button>
        </el-radio-group>
        <component :is="radio1"></component>

        </div>
    </panel-widget>
</template>
<script>
import Rainlist from './Rainlist.vue'
import Rainhistory from './Rainhistory.vue'
import Rainnum from './Rainnum.vue'
export default {
    components:{Rainnum,Rainlist,Rainhistory},
    data(){
        return{
            title:"康定市",
            radio1:"Rainnum"
        }
    }
}
</script>
<style>
.wind{
    width: 500px;
    height: 470px;
    text-align: center;
}
</style>