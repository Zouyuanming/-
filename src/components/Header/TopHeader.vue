<template>
    <div class="header-top">
        <div class="left">
<!--            <div class="time">-->
<!--                <span>{{date}}</span>-->
<!--            </div>-->
            <div class="item" v-for="item in leftList" :key="item.index" @click="change(item.index,item.url)"
                 :class="{ activeLeft: activeId.indexOf(item.index) > -1 }">
                <span class="word1">{{ item.name }}</span>
            </div>
        </div>
        <div class="title">
            <h1>{{title}}</h1>
        </div>
        <div class="right">
            <div class="item" v-for="item in rightList" :key="item.index" @click="change(item.index,item.url)"
                 :class="{ activeRight: activeId.indexOf(item.index) > -1 }">
                <span class="word1">{{ item.name }}</span>
            </div>
<!--            <div class="item user">-->
<!--                <img src="../../assets/images/faceone/头像男孩.png" alt="" class="touxiang"/>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '康定市自然灾害综合风险普查成果应用系统',
                date: '',
                activeId:'',
                leftList: [
                    {
                        index: "Hazards",
                        url: "/Hazards",
                        name: "致灾因子",
                    },
                    {
                        index: "Disaster",
                        url: "/Disaster",
                        name: "承灾体",
                    },
                    {
                        index: "History",
                        url: "/History",
                        name: "历史灾害",
                    },
                ],
                rightList: [
                    {
                        index: "Capacity",
                        url: "/Capacity",
                        name: "减灾能力",
                    },
                    {
                        index: "HidDangers",
                        url: "/HidDangers",
                        name: "重点隐患",
                    },
                    {
                        index: "Natural",
                        url: "/Natural",
                        name: "灾害事件"
                    }
                ],
            };
        },
        mounted() {
            // this.timer()
        },
        methods: {
            change(index, url) {
                this.show = index;
                this.$router.push(url);
            },
            // timer() {
            //     this.timer = setInterval(() => {
            //         this.date = new Date().toLocaleString()
            //     }, 1000)
            // },
            exit() {
                this.$router.push({
                        path: '/login',
                    }
                )
            }
        },
        watch: {
            $route: {
                handler: function (to) {
                    this.activeId = to.path
                },
                deep: true,
                immediate:true
            },
        }
        // beforeDestroy() {
        //     if (this.timer) {
        //         clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        //     }
        // }
    };
</script>

<style lang="scss" scoped>
    .header-top {
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 77px;
        background-image: url("../../assets/images/faceone/top.png") !important;
        background-size: 100% 100%;
    }

    .title {
        text-align: center;
        width: 30%;
        font-size: 28px;
        font-weight: 500;
        color: #ffffff;
        line-height: 67px;
        margin: 0;

        h1 {
            font-size: 30px;
        }
    }

    .activeLeft {
        background-image: url("../../assets/images/faceone/leftActive.png") !important;
        background-size: 100% 100%;
        z-index: 1000;
    }

    .activeRight {
        background-image: url("../../assets/images/faceone/rightActive.png") !important;
        background-size: 100% 100%;
        z-index: 1000;
    }

    .left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 30%;

        .item {
            cursor: pointer;
            position: relative;
            background-image: url("../../assets/images/faceone/矩形.png");
            background-size: 100% 100%;
            margin-top: 14px;
            width: 227.4px;
            height: 40px;

            span {
                font-size: 18px;
                font-weight: bold;
                color: #feffff;
                line-height: 18px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .time {
            background: none;
            position: relative;
            font-size: 13px;
            color: #ffffff;
            margin-top: 12px;
        }
    }

    .right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 30%;

        .item {
            cursor: pointer;
            position: relative;
            background-image: url("../../assets/images/faceone/矩形1.png");
            background-size: 100% 100%;
            margin-top: 14px;
            width: 227.4px;
            height: 40px;

            span {
                font-size: 18px;
                font-weight: bold;
                color: #feffff;
                line-height: 18px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .user {
            background: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .tuichu {
                width: 16px;
                height: 17px;
                position: absolute;
                top: 50%;
                left: 80%;
                transform: translate(-80%, -50%);
            }
        }
    }

</style>
