<template>
    <div>
        <winds class="windstore"></winds>
        <windright @closewindright="closewindright" v-if="display" class="windright"></windright>
    </div>
</template>
<script>
import windright from './windright.vue'
import winds from './windstore.vue'
export default {
  components: { winds, windright },
    data(){
        return{
            display:true
        }
    },
    methods:{
        closewindright(){
            this.display=false
        }
    }
}
</script>
<style>
.windstore{
    top:120px;
    left: 15%;
    position: absolute;
}
.windright{
    top: 72px;
    right: 0;
    position: absolute;
}
</style>