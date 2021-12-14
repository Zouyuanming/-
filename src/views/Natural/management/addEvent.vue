<template>
  <panel-widget title="新增事件" @close="close">
    <el-form size="mini" label-width="80px" :model="eventForm" ref="addForm">
      <el-form-item label="事件名称">
        <el-input v-model="eventForm.eventName"></el-input>
      </el-form-item>
      <el-form-item label="灾害类型">
        <el-select v-model="eventForm.disasterType" style="width: 100%">
          <el-option
            v-for="(item, index) in disasterType"
            :key="index"
            :label="item.disastertype"
            :value="item.disastertype"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发生日期">
        <el-date-picker
          v-model="eventForm.eventDate"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="eventForm.address"></el-input>
      </el-form-item>
      <el-form-item label="经度">
        <el-input-number controls-position="right" v-model="eventForm.lon"></el-input-number>
        <el-button type="primary" plain @click="drawposition" class="btoms">拾取</el-button>
      </el-form-item>
      <el-form-item label="纬度">
        <el-input-number controls-position="right" v-model="eventForm.lat"></el-input-number>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="eventForm.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </panel-widget>
</template>

<script>
import { Route } from "../../../utils/Route";
import { addEvent } from "../../../api/services/api";

export default {
  name: "addEvent",
  props: {
    disasterType: Array,
  },
  data() {
    return {
      eventForm: {
        eventName: "",
        disasterType: "",
        eventDate: "",
        address: "",
        lon: "",
        lat: "",
        description: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    resetForm() {
      this.eventForm = {
        eventName: "",
        disasterType: "",
        eventDate: "",
        address: "",
        lon: "",
        lat: "",
        description: "",
      };
    },
    submit() {
      addEvent(this.eventForm).then((res) => {
        if (res.status === 200) {
          this.$message({
            message: "添加成功",
            type: "success",
          });
        }
        this.$emit("refreshData");
        this.close();
      });
    },
    drawposition() {
      if (!this.route) {
        this.route = new Route(window.viewer);
      }
      this.route.drawposition({
        callback: (position) => {
          this.eventForm.lon = position[0].toFixed(3);
          this.eventForm.lat = position[1].toFixed(2);
        },
      });
    },
  },
   beforeDestroy() {
             if (this.route) {
                this.route.clear()
            }
        }
};
</script>

<style scoped>
/deep/.el-form-item__label {
  color: #ffffff;
}
.btoms {
  position: absolute;
  height: 76px;
  left: 152px;
}
</style>
