/**
* Describe: 通用面板布局（标题+关闭按钮+内容+统一风格） （显示位置由外部控制的...）
*/

<template>
    <div class="sl-box-card">
        <div class="header" @mousedown="handleHeaderDrag">
            <div class="divider"></div>
            {{title}}
            <el-button v-if="closeVisible" class="func-btn" icon="el-icon-close" @click="$emit('close')"></el-button>
            <el-button class="func-btn" :icon="contentVisible === true ? 'el-icon-minus':'el-icon-plus'" @click="contentVisible = !contentVisible"></el-button>
        </div>
        <div class="content" v-show="contentVisible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PanelWidget',
        props: {
            title: String,
            closeVisible:{
                type: Boolean,
                default:true
            }
        },
        data(){
            return {
               contentVisible: true
            }
        },
        methods: {
            handleHeaderDrag(e) {
                let clickedElement = e.currentTarget
                let beDraggedElement = clickedElement.parentElement
                let offsetX = beDraggedElement.offsetLeft
                let offsetY = beDraggedElement.offsetTop
                let innerX = e.clientX - offsetX
                let innerY = e.clientY - offsetY
                // 鼠标移动的时候不停的修改div的left和top值
                document.onmousemove = function (event) {
                    clickedElement.style.cursor = 'move'
                    beDraggedElement.style.left = event.clientX - innerX + 'px'
                    beDraggedElement.style.top = event.clientY - innerY + 'px'
                    beDraggedElement.style.right = 'auto'
                    beDraggedElement.style.bottom = 'auto'
                }
                document.onmouseup = function () {
                    clickedElement.style.cursor = 'default'
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sl-box-card {
        border: 1px solid #092E4D;
        //background-color: $background-color;
        border-radius: 4px;
        .header {
            padding: 8px 10px;
            height:24px;
            cursor: move;
            line-height: 24px;
            border-bottom: 1px solid #092E4D;
            font-size: 16px;
            color: whitesmoke;
            background: #092E4D;
            .divider{
                width: 5px;
                height:18px;
                display:inline-block;
                background-color: green;
                vertical-align: middle;
                position: relative;
                bottom:2px;
                margin-right: 5px
            }
            .func-btn {
                margin-top: 4px;
                float: right;
                padding: 2px;
                border: none;
                color: whitesmoke;
                background-color: transparent;
                transition: transform 0.5s;
            }
            .func-btn:hover {
                color: whitesmoke;
                transform: rotate(180deg) scale(1.2);
            }
        }
        .content{
            padding: 10px 12px;
            background: rgba(25,52,95,0.8);
        }
    }
</style>
