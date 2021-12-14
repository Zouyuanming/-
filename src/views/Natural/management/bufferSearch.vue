<template>
  <panel-widget :title="eventData.eventName + title" @close="close">
    <el-card class="box-card">
      <el-slider
        size="mini"
        v-model="buffer"
        :min="1"
        :max="100"
        :format-tooltip="formatTooltip"
      ></el-slider>
      <el-button size="mini" type="primary" plain @click="search"
        >查询</el-button
      >
      <div style="clear: both"></div>
      <transition name="el-zoom-in-top">
        <search-result
        @openinfobigBox="openinfobigBox"
          ref="result"
          v-show="resultVisible"
          :resultData="resultData"
        ></search-result>
      </transition>
    </el-card>
    
  </panel-widget>
</template>

<script>
import { getDataByBuffer } from "../../../api/services/api";


let bufferEntity = null;

import searchResult from "./searchResult";

export default {
  name: "bufferSearch",
  components: {
    searchResult,
  },
  props: {
    eventData: Object,
  },
  data() {
    return {
    InfoBoxVisible:true,
      title: "周边查询",
      buffer: 10,
      resultVisible: false,
      resultData: [],
    };
  },
  methods: {
    openinfobigBox(){
      this.$emit("infoBoxopen")
    },
    close() {
      this.$emit("close");
    },
    formatTooltip(val) {
      return "缓冲距离" + val + "km";
    },
    createBufferLayer() {
      if (bufferEntity) {
        window.viewer.entities.remove(bufferEntity);
      }
      let turfPositions = turf.point([
        parseFloat(this.eventData.lon),
        parseFloat(this.eventData.lat),
      ]);
      bufferEntity = Cesium.createGraphicsBuffer({
        viewer: viewer,
        turfPositions: turfPositions,
        radius: Number(this.buffer),
      });
    },
    search() {
      let para = {
        lon: this.eventData.lon,
        lat: this.eventData.lat,
        range: this.buffer,
        locationType: "",
      };
      getDataByBuffer(para).then((res) => {
        this.resultData = res.data;
        this.resultVisible = true;
        this.$refs.result.selectElement = this.resultData[0];
      });
    },
  },
  beforeDestroy() {
    if (bufferEntity) {
      window.viewer.entities.remove(bufferEntity);
    }
  },
  watch: {
    buffer: {
      handler: function () {
        this.createBufferLayer();
      },
      immediate: true,
    },
    eventData: {
      handler: function () {
        this.createBufferLayer();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/deep/ .box-card {
  border-radius: 0;
  width: 400px;
}

/deep/ .el-card__body {
  padding: 10px;
}

/deep/ .el-descriptions__header {
  margin-bottom: 0px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
}

.el-slider {
  float: left;
  width: 80%;
}

.el-button {
  margin-left: 10px;
  margin-top: 5px;
}

</style>
