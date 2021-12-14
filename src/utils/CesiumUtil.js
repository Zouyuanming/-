export function flyToPosition(position){
    window.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(position[0],position[1]-0.042,5000),
        orientation:{
            // heading:Cesium.Math.toRadians(90,0),
            pitch:Cesium.Math.toRadians(-20),
            roll:0.0
        },
        duration: 0.8
    })
}

