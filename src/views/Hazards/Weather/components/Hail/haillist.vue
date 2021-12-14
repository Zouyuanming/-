<template>
    <panel-widget @close="close" title="康定市冰雹数据">
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
            this.$emit("closehill")
        }
    }
}
</script>