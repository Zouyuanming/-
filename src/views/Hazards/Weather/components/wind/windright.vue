<template>
    <panel-widget title="康定市大风数据" @close="close">
        <div class="windright-top"></div>
    </panel-widget>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        close(){
            this.$emit("closewindright")
        }
    }
}
</script>
<style>
.windright-top{
    width: 386px;
    height: 678px;
}
</style>