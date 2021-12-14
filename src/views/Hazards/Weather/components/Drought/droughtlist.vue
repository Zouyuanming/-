<template>
    <panel-widget :title="title" :close-visible="false">
        <div class="drought"></div>
    </panel-widget>
</template>
<script>
export default {
    data(){
        return{
            title:"康定市"
        }
    }
}
</script>
<style>
.drought{
    width: 500px;
    height: 490px;
}
</style>