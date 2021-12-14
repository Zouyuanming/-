export class Route{

    constructor(viewer) {

        this.startDrawLayer = new Cesium.CustomDataSource('startDrawLayer')

        this.endDrawLayer = new Cesium.CustomDataSource('endDrawLayer')

        this.routeLayer = null

        viewer && viewer.dataSources.add(this.startDrawLayer)

        viewer && viewer.dataSources.add(this.endDrawLayer)

        this.startHandler = null

        this.endHandler = null

        this._viewer = viewer
    }


    drawStartPoint(options = {}) {
        if (this.endHandler){
            this.endHandler.destroy()
        }
        this._viewer._container.style.cursor = "crosshair"
        let $this = this
        $this.startHandler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas);

        //添加坐标点
        const _addInfoPoint = position => {
            let _labelEntity = new Cesium.Entity()
            _labelEntity.position = position
            _labelEntity.billboard = {
                image: require("../assets/images/map/big-start.png"),
                scale: 0.8,
                heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance:20000,
                pixelOffset:new Cesium.Cartesian2(0, -17)
            }
            $this.startDrawLayer.entities.removeAll()
            $this.startDrawLayer.entities.add(_labelEntity)
        }

        $this.startHandler.setInputAction( movement => {
            let ray = this._viewer.camera.getPickRay(movement.position);
            let cartesian3 = this._viewer.scene.globe.pick(ray, this._viewer.scene);
            _addInfoPoint(cartesian3)
            let position = $this.toWgs84(cartesian3)
            options.callback(position)
            $this.startHandler.destroy()
            $this._viewer._container.style.cursor = "default"
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    }

    drawposition(options ={}){
        if (this.positionHandler){
            this.positionHandler.destroy()
        }
        this._viewer._container.style.cursor = "crosshair"
        let $this = this
        $this.endHandler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas);

          //添加坐标点
          const _addInfoPoint = position => {
            let _labelEntity = new Cesium.Entity()
            _labelEntity.position = position
            _labelEntity.billboard = {
                image: require("../assets/images/map/pop.png"),
                scale: 0.8,
                // stroke: Cesium.Color.HOTPINK,
                
                heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance:20000,
                pixelOffset:new Cesium.Cartesian2(0, -17)
            }
            $this.endDrawLayer.entities.removeAll()
            $this.endDrawLayer.entities.add(_labelEntity)
        }

        $this.endHandler.setInputAction( movement => {
            let ray = this._viewer.camera.getPickRay(movement.position);
            let cartesian3 = this._viewer.scene.globe.pick(ray, this._viewer.scene);
            _addInfoPoint(cartesian3)
            let position = $this.toWgs84(cartesian3)
            options.callback(position)
            $this.endHandler.destroy()
            $this._viewer._container.style.cursor = "default"
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    drawEndPoint(options = {}) {
        if (this.startHandler){
            this.startHandler.destroy()
        }
        this._viewer._container.style.cursor = "crosshair"
        let $this = this
        $this.endHandler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas);

        //添加坐标点
        const _addInfoPoint = position => {
            let _labelEntity = new Cesium.Entity()
            _labelEntity.position = position
            _labelEntity.billboard = {
                image: require("../assets/images/map/big-end.png"),
                scale: 0.8,
                heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance:20000,
                pixelOffset:new Cesium.Cartesian2(0, -17)
            }
            $this.endDrawLayer.entities.removeAll()
            $this.endDrawLayer.entities.add(_labelEntity)
        }

        $this.endHandler.setInputAction( movement => {
            let ray = this._viewer.camera.getPickRay(movement.position);
            let cartesian3 = this._viewer.scene.globe.pick(ray, this._viewer.scene);
            _addInfoPoint(cartesian3)
            let position = $this.toWgs84(cartesian3)
            options.callback(position)
            $this.endHandler.destroy()
            $this._viewer._container.style.cursor = "default"
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    }

    toWgs84 (Cartesian3) {
        if (this.isDegrees(Cartesian3)) return Cartesian3;
        let cartographic = Cesium.Cartographic.fromCartesian(Cartesian3);
        let longitude = Cesium.Math.toDegrees(cartographic.longitude);
        let latitude = Cesium.Math.toDegrees(cartographic.latitude);
        return [longitude, latitude]
    }

    isDegrees (coords) {
        return Array.isArray(coords) && coords.length === 2 && coords.every(c => !isNaN(c) && typeof c === 'number');
    }

    createLineLayer(geoJSON){
        if (this.routeLayer) {
            this._viewer.dataSources.remove(this.routeLayer, true)
        }
        Cesium.GeoJsonDataSource.load(geoJSON).then(dataSource => {
            this._viewer.dataSources.add(dataSource)
            this.routeLayer = dataSource
            this._viewer.zoomTo(dataSource);
        })
    }

    clear(){
        if(this.positionHandler){
            this.positionHandler.destroy()
        }
        if (this.routeLayer) {
            this._viewer.dataSources.remove(this.routeLayer, true)
        }
        if (this.startHandler){
            this.startHandler.destroy()
        }
        if (this.endHandler){
            this.endHandler.destroy()
        }
        this.startDrawLayer.entities.removeAll()
        this.endDrawLayer.entities.removeAll()
        // this.positionHandler.entities.removeAll()
    }
}
