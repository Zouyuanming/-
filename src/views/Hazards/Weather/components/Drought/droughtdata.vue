<template>
    <panel-widget :title="title" @close="close">
        <div class="drought-data"></div>
    </panel-widget>
</template>
<script>
export default {
    data(){
        return{
            title:"康定市干旱数据"
        }
    },
    methods:{
        close(){
            this.$emit("closedrought")
        }
    }
}
</script>
<style>
.drought-data{
    height: 678px;
    width: 386px;
}
</style>