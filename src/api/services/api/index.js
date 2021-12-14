
import {exportFileRequest, get, post} from '../instance'
import resource from "../resource"


export const getLayerFeatures = (url) => {
    return get(url)
}

export const getEventList = (para) => {
    return get(resource.getEventList, para)
}

export const deleteEventById = (para) => {
    return post(resource.deleteEventById, para)
}

export const getReportPreview = (para) => {
    return post(resource.getReportPreview + "?eventId=" + para)
}

export const downLoadReport = (para) => {
    return exportFileRequest(resource.downLoadReport + "?eventId=" + para)
}

export const getDataByBuffer = (para) => {
    return get(resource.getDataByBuffer, para)
}

export const getRouteByPositions = (para) => {
    return get(resource.getRouteByPositions + para)
}

export const getDisasterType = (para) => {
    return get(resource.getDisasterType, para)
}

export const addEvent = (para) => {
    return post(resource.addEvent, para)
}

