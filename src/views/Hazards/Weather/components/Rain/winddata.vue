<template>
    <panel-widget :title="title" @close="close" >
        <div class="winddatalist"></div>
    </panel-widget>
</template>
<script>
export default {
    data(){
        return{
            title:"康定市暴雨数据"
        }
    },
    methods:{
        close(){
            this.$emit("closeRain")
        }
            }
}
</script>
<style>
.winddatalist{
    width: 500px;
    height: 490px;
}
</style>