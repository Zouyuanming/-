<template>
    <panel-widget title="康定市雷电数据" @close="close">
        <div class="bocxkhfua"></div>
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
            this.$emit("closethunder")
        }
    }
}
</script>
<style>
.bocxkhfua{
    height: 678px;
    width: 386px;
}
</style>