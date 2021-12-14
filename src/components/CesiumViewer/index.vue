<template>
    <div id="cesiumContainer">
        <slot></slot>
    </div>
</template>

<script>
    import { BaseLayer } from "../../utils/BaseLayer"
    import {ClickHandler} from "../../utils/ClickHandler"
    // import EventBus from "../../utils/EventBus";
    export default {
        data(){
            return {
                location: {
                    position:{
                        x: -1152256.2639364926,
                        y: 5445229.451925528,
                        z: 3152819.5503441705
                    },
                    up:{
                        x: -0.15046043236587817,
                        y: 0.40636624028521684,
                        z:0.9012370038168266
                    },
                    direction:{
                        x: 0.0989380729799502,
                        y: -0.900848788294118,
                        z: 0.4227087866889375
                    }
                },
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initViewer()
            })
        },
        methods: {
            initViewer() {
                Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwM2ZkNjljMi1hOWExLTQ1MjAtOTRhOS02ZjJlZjc2NzdlZmUiLCJpZCI6MzI0MjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTY5ODQ1OTV9.jkeMqWfeanzrHgMmsbrIsN-UcoA4CxVCP8euZeBXL9Y';
                let viewer = new Cesium.Viewer('cesiumContainer', {
                    navigationHelpButton: false,
                    requestRenderMode:true,
                    vrButton: false,
                    baseLayerPicker: false,
                    animation: false,
                    fullscreenButton: false,
                    timeline: false,
                    geocoder: false,
                    scene3DOnly: false,
                    homeButton: false,
                    infoBox: false,
                    maximumRenderTimeChange : Infinity,
                    selectionIndicator: true,
                    contextOptions: {
                        id: "cesiumCanvas",
                        webgl: {
                            alpha: true,
                            depth: true,
                            stencil: true,
                            antialias: true,
                            premultipliedAlpha: true,
                            //通过canvas.toDataURL()实现截图需要将该项设置为true
                            preserveDrawingBuffer: true,
                            failIfMajorPerformanceCaveat: true
                        }
                    }
                })
                window.viewer=viewer
                viewer.scene.requestRenderMode = true;
                Cesium.GeoJsonDataSource.clampToGround = true
                viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
                viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
                    url: "http://192.168.15.254:20000/sichuan"
                })
                Cesium.BaseLayer = new BaseLayer(viewer)
                //添加点位点击事件
                Cesium.ClickHandler = new ClickHandler(viewer)
                Cesium.ClickHandler.addPoiHandler(data => {
                    console.log(data)
                    var message = data.properties
                    var name = data.id.split(".")[0]
                    this.$store.commit('setValue',{message,name})
                    console.log(new Date().toString(),"发送数据")
                    this.$emit("openDetail")
                })
                viewer.scene.globe.depthTestAgainstTerrain = true   
                viewer._cesiumWidget._creditContainer.style.display = 'none'
                this.flyToPosition(this.location)
            },
            flyToPosition(option){
                window.viewer.camera.flyTo({
                    duration: 0,
                    destination: new Cesium.Cartesian3(option.position.x, option.position.y, option.position.z),
                    orientation: {
                        direction: new Cesium.Cartesian3(option.direction.x, option.direction.y, option.direction.z),
                        up: new Cesium.Cartesian3(option.up.x, option.up.y, option.up.z)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #cesiumContainer {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>

