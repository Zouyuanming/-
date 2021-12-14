<template>
  <div>
    <datavue class="data"></datavue>
    <winlist class="datalist"></winlist>
    <winddata class="windatas" @closeRain="closeRain" v-if="Rainvisiable"></winddata>
  </div>
</template>
<script>
import winlist from "./datalist.vue";
import datavue from "./datavue.vue";
import winddata from './winddata.vue';
export default {
  components: { datavue, winlist, winddata },
  name: "wind",
  data() {
    return {
      title: "大风",
      Rainvisiable:true
    };
  },
  mounted() {
  },
  methods: {
    closeRain(){
      this.Rainvisiable=false
    }
  },
};
</script>

<style>
.data {
  position: absolute;
  top: 160px;
  left: 500px;
}
.datalist {
  position: absolute;
  background: #090a0a6e;
  width: 100%;
  height: 200px;
  z-index: 100;
  bottom: 0%;
}
.windatas{
    position: absolute;
    top: 120px;
    right: 20px;
}
</style>
