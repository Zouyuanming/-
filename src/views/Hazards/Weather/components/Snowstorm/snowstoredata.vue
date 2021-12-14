<template>
    <panel-widget title="康定市雪灾数据" @close="close">
        <div></div>
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
            this.$emit("closedata")
        }
    }
}
</script>