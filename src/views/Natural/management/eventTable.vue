<template>
  <panel-widget title="事件列表" :close-visible="false">
    <el-table
      :data="tableData"
      style="width: 100%"
      size="mini"
      max-height="600"
      stripe
    >
      <el-table-column label="序号" width="50">
        <template slot-scope="scope">
          <el-tag effect="dark" type="danger"> {{ scope.$index + 1 }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="eventName"
        label="事件名称"
        width="140"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="eventDate" label="时间" width="100" sortable>
      </el-table-column>
      <el-table-column prop="disasterType" label="类型" width="65">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="坐标" width="130">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            size="mini"
            @click="positionTo(scope.row)"
          >
            {{ scope.row.lon + "/" + scope.row.lat }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot="header">
          <el-button type="primary" size="mini" @click="$emit('openAdd')"
            >新增事件</el-button
          >
        </template>
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="select(scope.row, 'analyse')"
            >综合分析</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="select(scope.row, 'buffer')"
            >周边查询</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </panel-widget>
</template>

<script>
// import EventBus from "../../../utils/EventBus";
// import Vue from "vue";
import { deleteEventById, getEventList } from "../../../api/services/api";
// import {InfoTool} from "../../../components/Popup/InfoTool";
import { flyToPosition } from "../../../utils/CesiumUtil";
// import info from "./info.vue";

let primitives = null;
let eventHandler = null;
export default {
  name: "eventTable",
  data() {
    return {
      tableData: [],
      infoTool: null,
    };
  },
  created() {
    this.getEventList();
  },
  methods: {
    getEventList() {
      getEventList().then((res) => {
        this.tableData = res.data;
        this.createEventLayer(this.tableData);
        this.createHandler();
      });
    },
    remove(row) {
      deleteEventById([row.id]).then((res) => {
        if (res.status === 200) {
          this.$message({
            showClose: true,
            message: "删除成功！",
            type: "success",
          });
          this.getEventList();
        }
      });
    },
    positionTo(row) {
      flyToPosition([parseFloat(row.lon), parseFloat(row.lat)]);
      //弹窗有问题
      // let cartesian = Cesium.Cartesian3.fromDegrees(parseFloat(row.lon), parseFloat(row.lat))
      // this.infoTool.add(
      //     {
      //         content: row.description,
      //         isHtml: false,
      //         position: cartesian
      //     }
      // )
    },
    select(row, flag) {
      this.$emit("selectEventData", row, flag);
    },
    clear() {
      // this.infoTool.remove()
      // this.infoTool = null
      primitives.removeAll();
      eventHandler.destroy();
      eventHandler = null;
    },
    createEventLayer(data) {
      if (primitives === null) {
        primitives = window.viewer.scene.primitives.add(
          new Cesium.BillboardCollection({ scene: window.viewer.scene })
        );
      }
      primitives.removeAll();
      let pinBuilder = new Cesium.PinBuilder();
      data.forEach((item, index) => {
        primitives.add({
          id: item,
          image: pinBuilder
            .fromText(index + 1, Cesium.Color.RED, 28)
            .toDataURL(),
          position: Cesium.Cartesian3.fromDegrees(
            parseFloat(item.lon),
            parseFloat(item.lat)
          ),
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          pixelOffset: new Cesium.Cartesian2(-10, -10),
        });
      });
    },
    createHandler() {
      if (!eventHandler) {
        eventHandler = new Cesium.ScreenSpaceEventHandler(
          window.viewer.scene.canvas
        );
        eventHandler.setInputAction((movement) => {
          let pick = window.viewer.scene.pick(movement.position);
          if (pick && pick.id && pick.id.eventName) {
            let cartesian = window.viewer.scene.pickPosition(movement.position);
            if (cartesian) {
                   var description=pick.id.description
                   var eventName = pick.id.eventName
               this.$store.commit("openlayer", {description,eventName })
               this.$emit("infoopen")
            //   let el = document.createElement("div");
            //   el.style.width = "250px";
            //   // el.innerHTML = pick.id.description
            //   this.infoTool.add({
            //     content: el,
            //     isHtml: true,
            //     position: cartesian,
            //   });
            }
          } 
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
      }
    },
  },
  beforeDestroy() {
    this.clear();
  },
};
</script>

<style scoped></style>
