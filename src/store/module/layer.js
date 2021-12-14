export default {
    namespaced: true,
    state:{
        layerList: [],
        HazardsMenu: [
            {
                id: "1",
                index: "earthQuake",
                img: require("../../assets/images/Hazards/earthquake.png"),
                name: "地震",
                routes: [
                    {
                        id:"1-1",
                        title: "活动断层",
                        index: "simple01",
                        path: "/Hazards/simple01",
                        name: "承灾体暴露度空间分布图"
                    },
                    {
                        id:"1-2",
                        index: "simple02",
                        path: "/Hazards/simple02",
                        name: "地震灾害风险区化图"
                    },
                    {
                        id:"1-3",
                        index: "simple03",
                        path: "/Hazards/simple03",
                        name: "地震灾害危险性分布图"
                    },
                    {
                        id:"1-4",
                        index: "simple04",
                        path: "/Hazards/simple04",
                        name: "承灾体易损性分布图"
                    }
                ]
            },
            {
                id: "2",
                index: "Geology",
                img: require("../../assets/images/Hazards/dizhi.png"),
                name: "地质",
                layerList: [
                    {
                        id: "2-1",
                        index: "Geology",
                        name: "地质",
                        list: [
                            {
                                id:"2-1-1",
                                index: "point",
                                name: "地质隐患点",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Adzzhyhd&maxFeatures=500&outputFormat=application%2Fjson",
                                img:require("../../assets/images/Layer/pin.png"),
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id: '2-1-2',
                                index: "school",
                                name: "学校",
                                url:"/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_xx&maxFeatures=500&outputFormat=application%2Fjson",
                                img:require("../../assets/images/Layer/school.png"),
                                checked: false,
                                symbol: "college",
                                color: "#1E90FF"
                            }
                        ]
                    }
                ]
            },
            {
                id: "4",
                index: "Flood",
                img: require("../../assets/images/Hazards/水旱.png"),
                name: "水旱",
                routes: [
                    {
                        id:"4-1",
                        index: "simple01",
                        path: "/Hazards/Flood",
                        name: "洪涝"
                    },
                    {
                        id:"4-2",
                        index: "simple02",
                        path: "/Hazards/simple02",
                        name: "干旱"
                    }
                ]
            },
            {
                id: "5",
                index: "Fire",
                img: require("../../assets/images/Hazards/火灾.png"),
                path: "/Hazards/Fire",
                name: "火灾"
            },
        ]
    },
    mutations:{
        pushLayerList(state,value){
            let index = state.layerList.indexOfByProp(value, 'index')
            if ( index === -1) {
                state.layerList.unshift(value);
            } else {
                state.layerList[index] = value
            }
        }
    },
    actions:{
    },
}
