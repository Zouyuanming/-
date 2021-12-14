
const BASE_URL = Glod.GEOSERVER_ROOT
import {getLayerFeatures} from "../api/services/api";

// let pinBuilder = new Cesium.PinBuilder()

export async function createLayer(option) {
    let geoJson = await getLayerFeatures(BASE_URL + option.url)
    let dataSource = await createGeoJsonLayer(geoJson, {
        color: option.color,
        symbol: option.symbol
    })
    return dataSource
}

function createGeoJsonLayer(geoJson, option){
    // console.log(geoJson)
    // console.log(geoJson)
    let dataSource = Cesium.GeoJsonDataSource.load(geoJson, {
        stroke: Cesium.Color.HOTPINK,
        fill: Cesium.Color.PINK,
        height: 140,
        markerColor: Cesium.Color.fromCssColorString(option.color),
        strokeWidth: 3,
        markerSymbol: option.symbol,
        markerSize: 32,
        clampToGround: true,
        // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
    })
    window.viewer.dataSources.add(dataSource)
    return dataSource
}

export function removeDataSource(dataSource) {
    window.viewer.dataSources.remove(dataSource, true)
}
