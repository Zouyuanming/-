
/**
* Describe: 通用面板布局（标题+关闭按钮+内容+统一风格） （显示位置由外部控制的...）
*/

<template>
  <div class="sl-box-card">
    <div
      class="header"
    >
      <span class="li-span">{{title}}</span>
      <el-button
        v-if="closeVisible"
        class="func-btn"
        icon="el-icon-close"
        @click="$emit('close')"
      ></el-button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'panel-widget',
        props: {
            title: String,
            closeVisible: {
                type: Boolean,
                default: true
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
   .sl-box-card {
  background: #0e1a2efa;
  opacity: 0.8;
  position: absolute;
  width: 40%;
  bottom: 164px;
  right: 188px;
  .header {
    display: flex;
    justify-content: space-between;
    height: 36px;
    line-height: 36px;
    padding: 0 6px;
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    background: rgba(2, 41, 66, 0.932);
    color: #ffffff;
    .li-span {
      height: 100%;
      margin-left: -6px;
      width: auto;
      padding: 0 10px;
      text-align: center;
      background: rgba(0, 160, 233, 0.5);
    }
    .func-btn {
      height: 100%;
      width: 40px;
      background-color: #0e1a2efa;
      margin-right: -6px;
      float: right;
      padding: 2px;
      border: none;
      color: #ffffff !important;
      // background-color: transparent;
      transition: transform 0.5s;
    }
    .func-btn:hover {
      background-color: #3863ad7a;
    }
  }

  .content {
    padding: 0px 4px 4px 4px;
  }
}
</style>
