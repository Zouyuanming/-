export class ClickHandler {

    constructor(viewer) {
        this._viewer = viewer
        this.poiHandler = null
    }

    addPoiHandler(callback) {
        this.poiHandler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas)
        this.poiHandler.setInputAction( movement => {
            let pick = this._viewer.scene.pick(movement.position)
            if (pick && pick.id && pick.id.properties) {
                callback(pick.id)
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }


}
