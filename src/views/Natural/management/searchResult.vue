<template>
    <div>
        <el-scrollbar class="page-component__scroll">
            <el-radio-group class="statistic-type-group"
                            v-model="selectElement"
                            size="small">
                <el-radio-button v-for="(item,index) in resultData"
                                 :key="index"
                                 :label="item">
                    <span>{{ item.locationType}}</span>
                    <span>{{`(${item.locationType ? item.datas.length : 0})`}}</span>
                </el-radio-button>
            </el-radio-group>
        </el-scrollbar>
        <list-content :selectElement="selectElement"></list-content>
    </div>
</template>

<script>
    import listContent from "./listContent"
    // import {InfoTool} from "../../../components/Popup/InfoTool"
    // import infoBox from "./infoBox"
    // import Vue from 'vue'

    let primitives = null

    let eventHandler = null

    export default {
        name: "searchResult",
        components:{
            listContent
        },
        props: {
            resultData:Array
        },
        data(){
            return {
                selectElement: {},
                infoTool: null
            }
        },
        mounted() {
          this.createHandler()
        },
        watch:{
            selectElement: {
                handler: function (val) {
                    if (val.datas)
                    this.createPoiLayer(val.datas)
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            createPoiLayer(data) {
                if (primitives === null) {
                    primitives = window.viewer.scene.primitives.add(
                        new Cesium.BillboardCollection({scene: window.viewer.scene})
                    );
                }
                primitives.removeAll();
                let pinBuilder = new Cesium.PinBuilder()
                data.forEach((item, index) => {
                    primitives.add({
                        id: item,
                        image: pinBuilder
                            .fromText(index + 1, Cesium.Color.fromCssColorString("#409eff"), 24)
                            .toDataURL(),
                        position: Cesium.Cartesian3.fromDegrees(
                            parseFloat(item.lon),
                            parseFloat(item.lat)
                        ),
                        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                        pixelOffset: new Cesium.Cartesian2(-10, -10),
                    })
                })
            },
            createHandler() {
                // if (!this.infoTool) {
                //     this.infoTool = new InfoTool(window.viewer)
                // }
                if (!eventHandler) {
                    eventHandler = new Cesium.ScreenSpaceEventHandler(window.viewer.scene.canvas)
                    eventHandler.setInputAction(movement => {
                        let pick = window.viewer.scene.pick(movement.position)
                        if (pick && pick.id) {
                            if (!(pick.id instanceof Cesium.Entity) && !pick.id.eventName) {
                                let cartesian = window.viewer.scene.pickPosition(movement.position)
                                if (cartesian) {
                                    console.log(pick.id,"pick.id")
                                    console.log(this.selectElement.locationCode)
                                        var detail = pick.id
                                        var type = this.selectElement.locationCode
                                        this.$store.commit("openinfoBox",{detail,type})
                                        this.$emit("openinfobigBox")
                                    // let InfoBoxConstructor = Vue.extend(infoBox);
                                    // let instance = new InfoBoxConstructor();
                                    // instance.$data.detail = pick.id
                                    // instance.$data.type = this.selectElement.locationCode
                                    // let el = instance.$mount().$el;
                                    // this.infoTool.add(
                                    //     {
                                    //         content: el,
                                    //         isHtml: true,
                                    //         position: cartesian
                                    //     }
                                    // )
                                }
                            }
                            // else {
                            //     this.infoTool.remove()
                            // }
                        }
                    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
                }
            }
        },
        beforeDestroy() {
            if (primitives){
                primitives.removeAll()
            }
        }
    }
</script>
<style scoped>
    .page-component__scroll {
        padding:  10px 0;
    }
</style>

<style lang="scss">
    .statistic-type-group {
        width: 100%;

        label {
            width: calc(100% / 3);
        }

        .el-radio-button--small .el-radio-button__inner {
            padding: 6px 0;
            width: calc(100% - 3px);
            background-color: rgba(111, 170, 212, 0.35);
            margin: 2px 0;
            box-shadow: none;
        }

        .el-radio-button:first-child .el-radio-button__inner {
            border: none;
            border-radius: 2px 0 0 2px;
        }

        .el-radio-button:last-child .el-radio-button__inner {
            border: none;
            border-radius: 0 2px 2px 0;
        }

        .el-radio-button__inner {
            border: none;
            color: #606266;
        }

        .el-radio-button__orig-radio:checked + .el-radio-button__inner {
            color: #f5f5f5;
            background-color: #428cc8;
            border-radius: 0;
        }
    }
</style>
