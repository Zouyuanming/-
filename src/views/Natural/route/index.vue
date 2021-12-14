<template>
    <panel-widget class="route"  title="路径规划" :close-visible="false">
        <el-form :model="start" :inline="true" size="mini">
            <el-form-item label="起点">
                <el-input v-model="start.lng" placeholder="经度"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="start.lat" placeholder="纬度"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="drawStart">拾取</el-button>
            </el-form-item>
        </el-form>
        <el-form :model="end" :inline="true" size="mini">
            <el-form-item label="终点">
                <el-input v-model="end.lng" placeholder="经度"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="end.lat" placeholder="纬度"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="drawEnd">拾取</el-button>
            </el-form-item>
        </el-form>
        <div style="text-align: right">
        <el-button size="mini" type="primary" @click="routeHandler">规划路径</el-button>
        </div>
        <route-line v-if="lineInfo.length" style="margin-top: 10px" :lineInfo="lineInfo"></route-line>
    </panel-widget>
</template>

<script>

    import {Route} from "../../../utils/Route";
    import {getRouteByPositions} from "../../../api/services/api";
    import routeLine from "./routeLine";

    export default {
        name: "index",
        components: {
            routeLine
        },
        data() {
            return {
                start: {
                    lng: "",
                    lat: ""
                },
                end: {
                    lng: "",
                    lat: ""
                },
                route: null,
                lineInfo:{
                    length: "",
                    time: ""
                }
            }
        },
        methods: {
            drawStart(){
                if (!this.route) {
                    this.route = new Route(window.viewer)
                }
                this.route.drawStartPoint({
                    callback: position => {
                        this.start.lng = position[0].toFixed(4)
                        this.start.lat = position[1].toFixed(4)
                    }
                })
                // console.log(this.position)
            },
            drawEnd(){
                if (!this.route) {
                    this.route = new Route(window.viewer)
                }
                this.route.drawEndPoint({
                    callback: position => {
                        this.end.lng = position[0].toFixed(4)
                        this.end.lat = position[1].toFixed(4)
                    }
                })
            },
            routeHandler(){
                let para = `x1:${this.start.lng};y1:${this.start.lat};x2:${this.end.lng};y2:${this.end.lat}`
                getRouteByPositions(para).then(res => { 
                    if (res.features.length > 0) {
                        this.route.createLineLayer(res)
                        this.lineInfo.length = res.features.reduce((sum, e) => sum + Number(e.properties.changdu || 0), 0)
                        this.lineInfo.time = res.features.reduce((sum, e) => sum + Number(e.properties.div_time || 0), 0)
                    }
                })
            }
        },
        beforeDestroy() {
            if (this.route) {
                this.route.clear()
            }
        }
    }
</script>

<style scoped>
    .route{
        position: absolute;
        top: 80px;
        left: 100px;
    }
    /deep/.el-form-item__label{
        color: #ffffff;
    }

</style>
