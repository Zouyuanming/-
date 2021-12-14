<template>
    <div class="list-content">
        <div class="list-item" :class="{active: item.id === selectEntityID}" v-for="(item,i) in selectElement.datas" :key="i"
             >
            <div class="name" @click="position(item)">
                <el-tag  effect="dark">{{i+1}}</el-tag>
                <span class="nameText" :title="item[field.nameField]">{{item[field.nameField]}}</span>
            </div>
            <div  class="prop" :title="item[field.propField]">
                <span>{{field.propName}}：</span>
                {{item[field.propField]}}
            </div>
        </div>
    </div>

</template>

<script>
    import {flyToPosition} from "../../../utils/CesiumUtil";

    export default {
        name: "list-content",
        props: {
            selectElement: Object,
            selectEntityID: String
        },
        data() {
            return {
                fieldList:{
                    school: {
                        nameField: "xxjgmc",
                        propName:"地址",
                        propField: "dz"
                    },
                    gasStation: {
                        nameField: "qymc",
                        propName:"地址",
                        propField: "dz"
                    },
                    hospital: {
                        nameField: "ylwsjgmc",
                        propName:"地址",
                        propField: "dz"
                    },
                    shelter: {
                        nameField: "yjbncsmc",
                        propName:"地址",
                        propField: "dz"
                    },
                    reserve: {
                        nameField: "cbkmc",
                        propName:"地址",
                        propField: "dz"
                    }
                }
            }
        },
        computed:{
            field(){
                let type = this.selectElement.locationCode
                let field = this.fieldList[type]
                return  field
            }
        },
        methods: {
            position(data) {
                flyToPosition([parseFloat(data.lon), parseFloat(data.lat)])
            }
        }
    }
</script>

<style scoped lang="scss">
    .list-content {
        max-height: 500px;
        color: #606266;
        overflow: auto;

        .list-item {
            min-height: 20px;
            width: calc(100% - 10px);
            cursor: pointer;
            padding: 5px;
            border-bottom: 1px dashed #606266;

            .name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .nameText {
                    margin-left: 10px;
                }
            }

            .prop {
                font-size: 12px;
                margin-left: 33px;
                color: #909399;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .list-item:first-child {
            border-top: 1px dashed #606266;
        }

        .list-item:hover {
            background: #C0C4CC;
        }

        .list-item.active {
            background: #C0C4CC;
        }
    }


</style>

<style scoped>
    /deep/.el-tag{
        border-radius: 50%;
        height: 23px;
        width: 23px;
        line-height: 23px;
        padding: 0;
        text-align: center;
    }
</style>
