export default {
    namespaced: true,
    state:{
        menu: [
            {
                id: "1",
                index: "disaster",
                img: require("../../assets/images/Hazards/earthquake.png"),
                name: "承灾体",
                layerList: [
                    {
                        id: "1-1",
                        index: "Base",
                        name: "基础设施",
                        list: [
                            {
                                id:"1-1-1",
                                index: "road",
                                name: "公路",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-2",
                                index: "line",
                                name: "路段",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-3",
                                index: "sd",
                                name: "隧道",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-4",
                                index: "water",
                                name: "康定市水系线1到5级",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            }
                        ]
                    },
                    {
                        id: "1-2",
                        index: "resources",
                        name: "资源环境"
                    },
                    {
                        id: "1-3",
                        index: "public",
                        name: "公共服务",
                        list: [
                            {
                                id:"1-3-1",
                                index: "publicArea",
                                name: "公共文化场所",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_ggwhcs&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "library",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-2",
                                index: "market",
                                name: "大型超市",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_jysc&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "grocery",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-3",
                                index: "spot",
                                name: "旅游景区",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_lyjq&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "park",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-4",
                                index: "accommodation",
                                name: "提供住宿的社会服务机构",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_shfljg&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "restaurant",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-5",
                                index: "Gymnasium",
                                name: "体育场馆",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_tycg&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "soccer",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-6",
                                index: "hotel",
                                name: "星级饭店",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_xjjd&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "commercial",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-7",
                                index: "school",
                                name: "学校",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_xx&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "college",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-8",
                                index: "hospital",
                                name: "医疗卫生机构",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_ylwsjg&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "hospital",
                                color: "#FF1493"
                            },
                            {
                                id:"1-3-9",
                                index: "Religion",
                                name: "宗教活动场所",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Aczt_zjhdcs&maxFeatures=500&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "building",
                                color: "#FF1493"
                            }
                        ]
                    },
                    {
                        id: "1-4",
                        index: "three",
                        name: "三次产业"
                    }
                ]
            }
        ]
    },
    mutations:{

    },
    actions:{
    },
}
