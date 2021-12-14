export default {
    namespaced: true,
    state:{
        menu: [
            {
                id: "1",
                index: "zdyh",
                img: require("../../assets/images/faceone/隐患.png"),
                name: "重点隐患",
                layerList: [
                    {
                        id: "1-1",
                        index: "dzzh",
                        name: "地震灾害",
                        list: [
                            {
                                id:"1-1-1",
                                index: "aqyhd",
                                name: "安全隐患点",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            }
                        ]
                    },
                    {
                        id: "1-2",
                        index: "hlzh",
                        name: "洪涝灾害",
                    },
                    {
                        id: "1-3",
                        index: "slcyhz",
                        name: "森林草原火灾",
                    },
                    {
                        id: "1-4",
                        index: "zrzh",
                        name: "自然灾害次生危险化学品事故危险源",
                        list: [
                            {
                                id:"1-4-1",
                                index: "dxks",
                                name: "地下矿山",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azdyh_dxks&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "embassy",
                                color: "#FF6347"
                            },
                            {
                                id:"1-4-2",
                                index: "jyjqz",
                                name: "加油加气站",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azdyh_jyjqz&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-4-3",
                                index: "ltks",
                                name: "露天矿山",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azdyh_ltks&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "weixian",
                                color: "#FF6347"
                            },
                            {
                                id:"1-4-4",
                                index: "wkk",
                                name: "尾矿库",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azdyh_wkk&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "golf",
                                color: "#FF6347"
                            },
                            {
                                id:"1-4-5",
                                index: "wxhxpqy",
                                name: "危险化学品企业",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azdyh_wxhxpqy&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "danger",
                                color: "#FF6347"
                            }
                        ]
                    },
                    {
                        id: "1-5",
                        index: "dzhizh",
                        name: "地质灾害",
                    }
                ]
            },
            // {
            //     id: "2",
            //     index: "jznl",
            //     img: require("../../assets/images/faceone/能力图.png"),
            //     path: "",
            //     name: "减灾能力"
            // },
        ]
    },
    mutations:{

    },
    actions:{
    },
}
