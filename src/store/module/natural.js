export default {
    namespaced: true,
    state:{
        menu: [
            {
                id: "1",
                index: "management",
                img: require("../../assets/images/自然灾害/management.png"),
                path: "/Natural/management",
                name: "事件管理"
            },
            {
                id: "4",
                index: "route",
                img: require("../../assets/images/自然灾害/projection.png"),
                path: "/Natural/route",
                name: "路径规划"
            }
        ]
    },
    mutations:{

    },
    actions:{
    },
}
