<template>
    <div class="line">
        <span class="name">路线</span>
        <div class="info">
            <div>距离：{{lineInfo.length.toFixed(2)}}公里</div>
            <div>时间：{{lineInfo.time.toFixed(2)}}分钟</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "routeLine",
        props:{
            lineInfo: {
                type: Object,
                default: () => {

                }
            }
        }
    }
</script>

<style scoped>
    .line {
        background: rgba(170, 204, 238, .5);
        position: relative;
        height: 80px;
    }
    .name {
        font-size: 14px;
        color: #ffffff;
        background: #0088ff;
        position: absolute;
        top: 0;
        left: 0;
        padding: 1px 5px;
    }
    .info {
        position: absolute;
        top: 25px;
        left: 20px;
        color: #ffffff;
    }


</style>
