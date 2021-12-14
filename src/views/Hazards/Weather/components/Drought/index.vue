<template>
    <div>
        <droughtlist class="droughtlist"></droughtlist>
        <droughtdata @closedrought="closedrought" v-if="groughtvisiable" class="droughtdaat"></droughtdata>
    </div>
</template>
<script>
import droughtdata from './droughtdata.vue'
import droughtlist from './droughtlist.vue'
export default {
  components: { droughtlist, droughtdata },
    data(){
        return{
            groughtvisiable:true
        }
    },
    methods:{
        closedrought(){
            this.groughtvisiable=false
        }
    }
}
</script>
<style>
.droughtlist{
    position: absolute;
    top:144px;
    left: 482px;
}
.droughtdaat{
    position: absolute;
    top: 130px;
    right: 20px;
    }
</style>