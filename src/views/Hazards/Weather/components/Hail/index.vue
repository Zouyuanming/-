<template>
    <div>
        <haildata class="haildata"></haildata>
        <haillist class="haillist" @closehill="closehill" v-if="hailvisible"></haillist>
    </div>
</template>
<script>
import haildata from './haildata.vue'
import haillist from './haillist.vue'
export default {
  components: { haildata, haillist },
    data(){
        return{
            hailvisible:true
        }
    },
    methods:{
        closehill(){
            this.hailvisible=false
        }
    }
}
</script>
<style>
.haildata{
    position: absolute;
    left: 15%;
    top: 15%;
}
.haillist{
    position: absolute;
    right: 0;
    top: 79px;
}
</style>