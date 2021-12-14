<template>
  <panel-widget title="图层管理" :closeVisible="false" ref="layer">
    <div class="layer-list">
      <div v-for="(layer,index) in layerList" :key="layer.index">
        <el-checkbox v-model="layer.checked" @change="checkLayer(layer)"
          >{{ layer.name }}
          <el-button
            class="butom"
            type="primary"
            size="small"
            icon="el-icon-delete"
            @click="delnode(layer,index)"
          ></el-button>
        </el-checkbox>
      </div>
      <el-empty v-if="layerList.length === 0" description="暂无图层"></el-empty>
    </div>
  </panel-widget>
</template>

<script>
import { mapState } from "vuex";
import { createLayer, removeDataSource } from "../../utils/LayerUtil";
export default {
  name: "index",
  computed: {
    ...mapState({
      layerList: (state) => state.layer.layerList,
    }),
  },
  mounted() {
    //默认收缩面板
    this.$refs.layer.contentVisible = false;
  },
  methods: {
    delnode(layer,index) {
        // console.log(layer.index)
        // console.log(this.layerList)
      if (layer["dataSource"]) {
        removeDataSource(layer["dataSource"]);
        // layer['dataSource'] = null
        layer.checked = false;
      }
    //   for(var i=0;i<this.layerList.length;i++){
    //       if(this.layerList[i].index==layer.index){
    //           console.log(i)
    //           return i
    //       }
    //   }
    this.layerList.splice(index,1)
    },
    checkLayer(layer) {
      if (layer.checked) {
        createLayer(layer).then((dataSource) => {
          layer["dataSource"] = dataSource;
        });
      } else {
        if (layer["dataSource"]) {
          removeDataSource(layer["dataSource"]);
          layer["dataSource"] = null;
        }
      }
    },
  },
};
</script>

<style scoped>
.layer-list {
  width: 350px;
  max-height: 400px;
  overflow-y: auto;
}
</style>
<style>
.el-checkbox {
  color: #ffffff !important;
}
.butom {
  right: 500px !important;
  border: none !important;
  color: #a5a1a1e1 !important;
  bottom: 5px !important;
  background-color: transparent !important;
}
.butom:hover {
  border: none !important;
  bottom: 5px !important;
  color: #000 !important;
  background-color: transparent !important;
  transform: scale(1.2) !important;
}
</style>
