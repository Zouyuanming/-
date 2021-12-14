<template>
    <div class="base-layer"
         :class="{'active': visibleIndex === 1}"
         @mouseover="mouseover"
         @mouseleave="mouseleave">
        <template v-for="(layer, index) in layers">
            <div class="layer"
                 :class="{'active':layer.index === selectLayer.index}"
                 :key="index"
                 v-show="index < visibleIndex"
                 :style="[layer.style]"
                 @click.self="selectLayerHandler(layer)">
                <div class="switch-box" v-if="layer.checkVisible">
                    <el-checkbox class="switch" v-model="layer.checkValue" @change="checkHandler(layer)">
                        {{layer.checkName}}
                    </el-checkbox>
                </div>
                <span>{{layer.name}}</span>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                visibleIndex: 1,
                layers: [
                    {
                        index: 'img',
                        name: '三维影像',
                        type: 'img',
                        checkVisible: true,
                        checkName: '倾斜摄影',
                        checkType: 'osgb',
                        checkValue: false,
                        style: {
                            backgroundPosition: '0 -120px'
                        }
                    },
                    {
                        index: 'vec',
                        name: '三维矢量',
                        type: 'vec',
                        checkVisible: true,
                        checkName: '路网地名',
                        checkType: 'road',
                        checkValue: false,
                        style: {
                            backgroundPosition: '0 0'
                        }
                    },
                    {
                        index: 'plane',
                        name: '二维',
                        type: 'plane',
                        checkVisible: false,
                        style: {
                            backgroundPosition: '0 -60px'
                        }
                    }
                ],
                selectLayer: {
                    index: 'img',
                    name: '三维影像',
                    type: 'img',
                    checkVisible: true,
                    checkName: '倾斜摄影',
                    checkType: 'osgb',
                    checkValue: false,
                    style: {
                        backgroundPosition: '0 -120px'
                    }
                }
            }
        },
        methods: {
            mouseover() {
                this.visibleIndex = this.layers.length
            },
            mouseleave() {
                this.visibleIndex = 1
                //改变数组结构 让选中的始终显示
                this.layers.remove(this.selectLayer)
                this.layers.unshift(this.selectLayer)
                //解决第一次移入再移除的bug
                let obj = {};
                this.layers = this.layers.reduce((cur,next) => {
                    obj[next.index] ? "" : obj[next.index] = true && cur.push(next);
                    return cur;
                },[])

            },
            selectLayerHandler(layer) {
                this.selectLayer = layer
            },
            checkHandler(layer) {
                this.selectLayer = layer
            }
        },
        watch: {
            selectLayer: {
                handler: function (val, oldVal) {
                    //todo 执行切换图层操作
                    if (val.type === 'plane') {
                        window.viewer.scene.morphTo2D(0)
                    } else {
                        if (oldVal.type === 'plane') {
                            //切换成三维
                            window.viewer.scene.morphTo3D(0)
                            Cesium.BaseLayer.removeLayer('img')
                            Cesium.BaseLayer.removeLayer('vec')
                        }
                        if (val.index !== oldVal.index) {
                            Cesium.BaseLayer.addLayer(val.type)
                            Cesium.BaseLayer.removeLayer(oldVal.type)
                        }
                        if (val.checkValue) {
                            if (val.checkType === 'road') {
                                Cesium.BaseLayer.addLayer(val.checkType)
                                Cesium.BaseLayer.removeOsgb()
                            }
                            if (val.checkType === 'osgb') {
                                Cesium.BaseLayer.addOsgb()
                                Cesium.BaseLayer.removeLayer('road')
                            }
                        } else {
                            if (val.checkType === 'road') {
                                Cesium.BaseLayer.removeOsgb()
                                Cesium.BaseLayer.removeLayer(val.checkType)
                            }
                            if (val.checkType === 'osgb') {
                                Cesium.BaseLayer.removeOsgb()
                                Cesium.BaseLayer.removeLayer('road')
                            }
                        }

                    }

                },
                deep: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .base-layer {
        padding: 5px;
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.6);

        .layer {
            background-image: url("../../assets/images/map/maptype.png");
            height: 60px;
            width: 86px;
            border: 1px solid rgba(153, 153, 153, 1);
            position: relative;
            float: right;
            margin: 2px;
            cursor: pointer;

            .switch-box {
                visibility: hidden;
                position: absolute;
                width: 100%;
                height: 23px;
                line-height: 20px;
                color: #fff;
                background: rgba(0, 0, 0, .5);
                text-align: center;

                .el-checkbox {
                    color: #ffffff !important;
                    font-size: 10px !important;
                }
            }

            span {
                position: absolute;
                bottom: 0;
                right: 0;
                display: inline-block;
                padding: 3px 3px 2px 4px;
                font-size: 12px;
                height: 12px;
                line-height: 12px;
                color: #FFF;
                border-top-left-radius: 2px;
            }
        }

        .layer.active {
            border: 1px solid #0088ff;

            span {
                background: #0088ff;
            }
        }

        .vec {
            background-position: 0 0;
        }

        .img {
            background-position: 0 -120px;
        }

        .plane {
            background-position: 0 -60px;
        }

        .layer:hover {
            border: 1px solid #0088ff;

            .switch-box {
                visibility: visible;
            }

            span {
                background: #0088ff;
            }
        }

    }

    .base-layer.active {
        background: transparent;
    }

</style>
<style lang="scss">
    .switch-box {
        .el-checkbox__label {
            padding-left: 3px;
            font-size: 13px;
        }

        .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #ffffff;
        }
    }


</style>
