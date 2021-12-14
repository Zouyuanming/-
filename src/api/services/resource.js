const GEOSERVER_URL = Glod.GEOSERVER_ROOT
export default {
    getEventList:"disasterEvent/all",
    getEventType: "disasterEvent/disasterTypeList",
    deleteEventById: "disasterEvent/delete",
    getReportPreview: "disasterEvent/analysisPreview",
    downLoadReport: "disasterEvent/analysisDownload",
    getDataByBuffer: "disasterEvent/affectRange",
    getRouteByPositions:  GEOSERVER_URL + "/geoserver/road/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=road:road1&maxFeatures=50&outputFormat=application/json&viewparams=",
    getDisasterType: "disasterEvent/disasterTypeList",
    addEvent: "disasterEvent/save"
}
