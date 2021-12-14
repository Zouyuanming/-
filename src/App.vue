<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    * {
        padding: 0px;
        margin: 0px;
    }

    #app {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    ::-webkit-scrollbar {
        width: 3px;
        /*滚动条宽度*/
        height: 3px;
        /*滚动条高度*/
        background-color: #e6eaee;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(202, 202, 202, 0.3);
        background-color: #bdc6ce;
        /*滚动条的背景颜色*/
    }
</style>
