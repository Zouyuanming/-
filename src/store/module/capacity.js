export default {
    namespaced: true,
    state:{
        menu: [
            {
                id: "1",
                index: "government",
                img: require("../../assets/images/减灾能力/政府.png"),
                path: "",
                name: "政府减灾能力",
                layerList: [
                    {
                        id: "1-1",
                        index: "government",
                        name: "政府减灾能力",
                        list: [
                            {
                                id:"1-1-1",
                                index: "qxj",
                                name: "气象局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-2",
                                index: "jtj",
                                name: "交通局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-3",
                                index: "yjglj",
                                name: "应急管理局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-4",
                                index: "nyncj",
                                name: "农业农村局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-5",
                                index: "slj",
                                name: "水利局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-6",
                                index: "lyj",
                                name: "林业局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-7",
                                index: "cxghjs",
                                name: "城乡规划建设和住房保障局",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-8",
                                index: "dzzyjyd",
                                name: "地震专业救援队与装备",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-9",
                                index: "hszy",
                                name: "海事专业救援队与装备",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-10",
                                index: "kszy",
                                name: "矿山专业救援队与装备",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-11",
                                index: "sdzy",
                                name: "隧道专业救援队与装备",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-12",
                                index: "slxfd",
                                name: "森林消防队与装备",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_zf_xfdwzb&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "minefield",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-13",
                                index: "whyq",
                                name: "危化油气救援队与装备",
                                url: "",
                                checked: false,
                                symbol: "campsite",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-14",
                                index: "zfqyzz",
                                name: "政府企业专职消防救援队与装备",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_zf_zzjydw&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "marker",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-15",
                                index: "zfzhgl",
                                name: "政府灾害管理能力",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_zf_zfzhglnl&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "square-stroked",
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-16",
                                index: "yjbn",
                                name: "应急避难场所",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_zf_yjblcs&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "pitch",                 
                                color: "#FF6347"
                            },
                            {
                                id:"1-1-17",
                                index: "jywzck",
                                name: "救灾物资储备库",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_zf_jzwz&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "warehouse",
                                color: "#FF6347"
                            }
                        ]
                    }
                ]
            },
            {
                id: "2",
                index: "sociology",
                img: require("../../assets/images/减灾能力/社会.png"),
                path: "",
                name: "社会减灾能力",
                layerList: [
                    {
                        id: "2-1",
                        index: "sociologys",
                        name: "企业与社会力量减灾资源",
                        list: [
                            {
                                id:"2-1-1",
                                index: "sociologys",
                                name: "社会应急力量综合减灾资源",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_qysh_shzy&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "star-stroked",
                                color: "#FF6347"
                            }
                        ]
                    }
                ]
            },
            {
                id: "3",
                index: "base",
                img: require("../../assets/images/减灾能力/基层.png"),
                path: "",
                name: "基层综合减灾能力",
                layerList: [
                    {
                        id: "3-1",
                        index: "base",
                        name: "基层综合减灾资源",
                        list: [
                            {
                                id:"3-1-1",
                                index: "sq",
                                name: "社区（行政村）综合减灾资源",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_jc_sqzy&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "town-hall",
                                color: "#FF6347"
                            },
                            {
                                id:"3-1-2",
                                index: "xz",
                                name: "乡镇（街道）综合减灾资源",
                                url: "/geoserver/KDFXPC/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=KDFXPC%3Azhjzzy_jc_xzzy&maxFeatures=50&outputFormat=application%2Fjson",
                                checked: false,
                                symbol: "toilets",
                                color: "#FF6347"
                            }
                        ]
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
