<template>
    <div>
        <snowstoredata @closedata="closedata" v-if="snowstroevisible" class="snowstoredata"></snowstoredata>
        <snowstoemlist class="snowstoemlist"></snowstoemlist>
    </div>
</template>
<script>
import snowstoemlist from './snowstoemlist.vue'
import snowstoredata from './snowstoredata.vue'
export default {
  components: { snowstoredata, snowstoemlist },
    data(){
        return{
            snowstroevisible:true
        }
    },
    methods:{
        closedata(){
            this.snowstroevisible=false
        }
    }
}
</script>
<style>
.snowstoredata{
    position: absolute;
    right: 0;
    top: 74px;
}
.snowstoemlist{
    position: absolute;
    top: 15%;
    left: 15%;
}
</style>