<template>
    <div>
        <list class="list" v-if="listvisitable"></list>
        <listbotton class="listbotton"></listbotton>
    </div>
</template>
<script>
import list from "./list.vue"
import listbotton from './listbotton.vue'
export default {
    components:{list, listbotton},
    data(){
        return{
       listvisitable:true,
       title:"康定市自然灾害发生次数"
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            var title =this.title
            this.$store.commit("sendtitle",title)
        },
    }
}
</script>
<style>
.list{
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 15%;
}
.listbotton{
    position: absolute;
    background:#090a0a6e;
    width: 100%;
    height: 200px;
    z-index: 100;
    bottom: 0%;
}
</style>