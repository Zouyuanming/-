// import { turn } from "core-js/core/array"

/**
 * 内网地图采用配置方便切换,暂时写死
 */
let tileset = ''
export class BaseLayer {

    constructor(viewer) {
        this._viewer = viewer
        let img = new Cesium.MapboxImageryProvider({
            mapId: 'mapbox.satellite',
            accessToken: 'pk.eyJ1Ijoid3V4aWFvdGlhbiIsImEiOiJja212cWgzM3EwN3B0MnBxaTQ5M2h6bm54In0.kw0nZ574PUFrNz6F8pe9og'
        })

        let vec = new Cesium.MapboxImageryProvider({
            mapId: 'mapbox.satellite',
            accessToken: 'pk.eyJ1Ijoid3V4aWFvdGlhbiIsImEiOiJja212cWgzM3EwN3B0MnBxaTQ5M2h6bm54In0.kw0nZ574PUFrNz6F8pe9og'
        })

        let cva = new Cesium.UrlTemplateImageryProvider({
            url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
            style: "default",
            format: "image/png",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: true
        })

        let osgb = new Cesium.Cesium3DTileset({
            url: "http://192.168.15.254:20000/3dtile/Data/tileset.json", //切片url
            skipLevels: 1,

        })
        this.layers = {
            img: this._viewer.imageryLayers.addImageryProvider(img, 1),
            road: this._viewer.imageryLayers.addImageryProvider(cva, 2),
            vec: this._viewer.imageryLayers.addImageryProvider(vec, 1),
            osgb: osgb
        }
        this.layers.vec.show = false
        this.layers.road.show = false


        tileset = null
    }

    addLayer(type) {
        if (this.layers[type])
            this.layers[type].show = true
    } 

    removeLayer(type) {
        if (this.layers[type])
            this.layers[type].show = false
    }

    addOsgb() {
        if (tileset) {
            tileset.show = true
            viewer.scene.globe.depthTestAgainstTerrain = false

        } else {
            tileset = this._viewer.scene.primitives.add(this.layers.osgb)
            tileset.readyPromise.then(currentModel => {
                    // var boundingSphere = currentModel.boundingSphere;
                    // var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center) //获得模型中心点的经纬度坐标
                    // console.log("模型中心点经纬度", cartographic)
                    // var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0) //模型中心的笛卡尔坐标
                    // console.log("模型笛卡尔", surface)
                    // var positions = [Cesium.Cartographic.fromDegrees(cartographic.longitude, cartographic.latitude)];
                    // console.log("=====>>>", positions)
                    // var terrainProvider = Cesium.createWorldTerrain();
                    // console.log("11111", terrainProvider)
                    // var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, positions) //其中terrainProvider是当前场景使用的高程Provider
                    // console.log("=====<<<<<", promise)
                    // Cesium.when(promise, function (updatedPositions) {
                    //     var terrainHeight = updatedPositions[0].height; //高程
                    //     var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, terrainHeight); //带高程的新笛卡尔坐标
                    //     var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3()); //做差得到变换矩阵
                    //     currentModel.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
                    // })
                    let longitude = 101.954585
                    let latitude = 30.000190
                    // let height = cartographic.height;
                    let position = Cesium.Cartesian3.fromDegrees(
                        longitude,
                        latitude,
                        0
                    );
                    let m = Cesium.Transforms.eastNorthUpToFixedFrame(position); //这个方法支持通过传入一个中心点，然后获取到中心点的正东正北，和地表法线的方向：
                    if (currentModel) {
                        currentModel._root.transform = m;
                    }
                    this._viewer.zoomTo(currentModel)
                })
                .otherwise(function (error) {
                    throw error;
                });
              if(tileset){
                viewer.scene.globe.depthTestAgainstTerrain = false
              }
        }
    }

    removeOsgb() {
        if (tileset)
            tileset.show = false
            viewer.scene.globe.depthTestAgainstTerrain = true
    }
}