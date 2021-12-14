<template>
    <div id="naveList">
        <div class="arrow" @click="showContent =!showContent">
            <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="contentBox" v-if="showContent">
            <ul>
                <li v-for="parent in navDatas" :key="parent.id"
                    @mouseover="mouseover(parent.index)"
                    @mouseleave="mouseleave">
                    <div @click="changePage(parent.path)" class="parents">
                        <img :src="parent.img" alt=""/>
                        <span>{{ parent.name }}</span>
                    </div>
                    <div style="left: 60px;padding-left:10px;position: absolute;top: 0px;left: 60px">
                        <!-- 普通子菜单 -->
                        <div class="childrenList" v-if="parent.routes">
                            <div v-if="selectNav === parent.index">
                                <div class="titleBox">
                                    <div class="title" v-if="parent.routes[0].title">
                                        <img :src="parent.routes[0].img" alt="" v-if="parent.routes[0].img"/>
                                        {{ parent.routes[0].title }}
                                    </div>
                                </div>
                                <div class="item" v-for="item in parent.routes" :key="item.index"
                                     @click="clickChildren(item.path)">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                        <!-- 树形子菜单 -->
                        <div class="TreeLists" v-if="parent.layerList">
                            <div v-if="selectNav == parent.index">
                                <el-menu :uniqueOpened="true"
                                         background-color="#141d26"
                                         text-color="#fff"
                                         active-text-color="#fff">
                                    <el-submenu :index="item.id" v-for="item in parent.layerList" :key="item.id">
                                        <template slot="title">
                                            <span>{{ item.name }}</span>
                                        </template>
                                        <el-menu-item :index="_item.url"
                                                      v-for="_item in item.list"
                                                      :key="_item.name"
                                                      padding-left="0px">
                                            <template slot="title">
                                                <el-checkbox class="checkbox-style"
                                                             v-model="_item.checked"
                                                             @change="checkLayer(_item)">
                                                    {{ _item.name }}
                                                </el-checkbox>
                                            </template>
                                        </el-menu-item>
                                    </el-submenu>
                                </el-menu>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {createLayer, removeDataSource} from "../../utils/LayerUtil";
    import {mapState} from "vuex"
    export default {
        props: {
            navDatas: Array
        },
        computed: {
            ...mapState({
                layerList: state => state.layer.layerList
            })
        },
        data() {
            return {
                selectNav: "#",
                selectStyle: "#",
                showContent: true
            };
        },
        watch: {
            // $route: {
            //     handler: function (to) {
            //         this.selectStyle = to.name
            //     },
            //     deep: true,
            //     immediate: true
            // },
        },
        methods: {
            changePage(path) {
                if (path)
                this.$router.push(path);
            },
            mouseover(index) {
                this.selectStyle = index
                this.selectNav = index
            },
            mouseleave(){
                this.selectNav =  "#"
                this.selectStyle = this.$route.name
            },
            clickChildren(path) {
                this.$router.push(path);
            },
            checkLayer(layer) {
                if (!layer.url){
                    this.$message({
                        message: '未配置图层服务，无法加载数据',
                        type: 'warning'
                    })
                    return
                }
                if (layer.checked) {
                    createLayer(layer).then(dataSource =>{
                        layer['dataSource'] = dataSource
                    })
                }else {
                    if (layer['dataSource']) {
                        removeDataSource(layer['dataSource'])
                        layer['dataSource'] = null
                    }
                }
                this.$store.commit('layer/pushLayerList', layer)
            }
        }
    };
</script>

<style lang="scss" scope>
    @keyframes rolling {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .search {
        width: 50px;
        height: 50px;
        background-color: #141d26;
        opacity: 0.9;
        border-radius: 2px;
        overflow: hidden;

        .searchIcon::before {
            margin: 0 auto;
            margin-top: 5px;
            content: " ";
            display: block;
            width: 22px;
            height: 22px;
            background: url(../../assets/images/Hazards/search.png);
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: cover;
        }

        span {
            width: 25px;
            height: 12px;
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
        }
    }

    .arrow {
        width: 60px;
        height: 20px;
        background: #141d26;
        opacity: 0.9;
        text-align: center;
        cursor: pointer;

        i {
            color: #ffffff;
        }
    }

    .arrow:hover {
        i {
            color: #6faad4;
        }
    }

    .contentBox {
        margin-top: 2px;
        box-sizing: border-box;
        width: 60px;
        background: #141d26;
        opacity: 0.9;

        ul {
            margin: 0px;
            padding: 0px;

            .active {
                background: rgba(0, 128, 204, 1) !important;
            }

            li {
                padding: 5px 0px 5px 0px;
                position: relative;

                .parents {
                    cursor: pointer;

                    img {
                        display: block;
                        margin: 0 auto;
                        width: 27px;
                        height: 28px;
                    }

                    span {
                        display: block;
                        font-size: 14px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #ffffff;
                        text-align: center;
                    }
                }

                .parents:hover {
                    background: rgba(0, 128, 204, 1);
                }

                .childrenList {
                    background: #141d26;
                    width: 180px;
                    float: right;

                    .titleBox {
                        text-align: center;

                        .title {
                            text-align: center;
                            font-size: 14px;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 30px;
                        }
                    }

                    .item {
                        cursor: pointer;
                        text-align: center;
                        height: 26px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 26px;
                        padding: 5px 0px;
                    }

                    .item:hover {
                        background: rgba(0, 128, 204, 1);
                    }

                    .Active {
                        background: rgba(0, 128, 204, 1) !important;
                    }
                }

                .el-checkbox {
                    padding: 2px 0 0 0;
                }


                .TreeLists {
                    background: url(../../assets/images/Hazards/back.png);
                    width: 250px;

                    .el-menu {
                        border-right: none;

                        .el-submenu__title {
                            padding: 0 150px;
                            height: 36px;
                            line-height: 36px;
                        }

                        .el-submenu__title:hover {
                            background: rgba(0, 128, 204, 1) !important;
                        }

                        .el-submenu .el-menu-item {
                            padding-left: 20px !important;
                            min-width: 250px;
                            height: 36px;
                            line-height: 36px;
                            text-align: left;

                            .el-checkbox {
                                color: #fff;
                            }
                        }

                        .el-submenu .el-menu-item:hover {
                            background: rgba(0, 128, 204, 1) !important;
                        }
                    }
                }
            }
        }
    }

</style>
