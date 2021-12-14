<template>
    <div>
        <thunderlist @closethunder="closethunder" v-if="thundervisiable" class="thunderlist"></thunderlist>
        <thunderdata class="thunderdata"></thunderdata>
    </div>
</template>
<script>
import thunderdata from "./thunderdata.vue"
import thunderlist from './Thunderlist.vue'
export default {
    components:{
thunderlist,
thunderdata
    },
    data(){
        return{
            thundervisiable:true
     }
    },
    methods:{
        closethunder(){
            this.thundervisiable=false
        }
    }
}
</script>
<style>
.thunderlist{
    position: absolute;
    top: 79px;
    right: 0;
}
.thunderdata{
    position: absolute;
    top: 15%;
    left: 15%;
}
</style>