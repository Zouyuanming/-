<template>
  <div class="app-main">
    <top-header></top-header>
    <cesium-view @openDetail="openDetail">
      <layer-mananger class="layer-container"></layer-mananger>
      <base-map class="basemap-container"></base-map>
      <detail
        v-if="detailVisible"
        class="detail-container"
        @close="closeDetail"
      ></detail>
    </cesium-view>
    <router-view :key="key" />
  </div>
</template>

<script>
import CesiumView from "../../../components/CesiumViewer";
import TopHeader from "../../../components/Header/TopHeader";
import LayerMananger from "../../../components/LayerMananger";
import BaseMap from "../../../components/BaseMap";
import Detail from "../../../components/Detail/Detail";
export default {
  name: "AppMain",
  components: {
    CesiumView,
    TopHeader,
    LayerMananger,
    BaseMap,
    Detail,
  },
  data() {
    return {
      detailVisible: false,
    };
  },
  methods: {
    closeDetail() {
      this.detailVisible = false;
    },
    openDetail() {
      this.detailVisible = true;
    },
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.layer-container {
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 10;
}

.basemap-container {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 10;
}
.detail-container {
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 999;
}
</style>
