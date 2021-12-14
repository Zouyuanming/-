<template>
<panel-widget :title="title" @close="closeinfobigbox">
    <div style="width: 300px">
        <el-descriptions border size="mini" :column="1">
            <el-descriptions-item v-for="(item, index) in field" :key="index" :label="item.fieldname">
                <span :title="detail[item.field]">{{detail[item.field]}}</span>
            </el-descriptions-item>
        </el-descriptions>
    </div>
</panel-widget>
</template>
<script>
    export default {
        name: "infoBox",
        computed: {
            type(){
                return this.$store.state.type
            },
            field() {
                return this.fieldList[this.type]
            },
            detail(){
                return this.$store.state.detail
            },
        },
        data() {
            return {
                title:"详情",
                fieldList: {
                    school: [
                        {fieldname: "地址", field: "dz"},
                        {fieldname: "学校名称", field: "xxjgmc", listFlag: true},
                        {fieldname: "学校等级", field: "xxjgbxlxzl"},
                        {fieldname: "教职工数", field: "jzgs"},
                        {fieldname: "在校生数", field: "zxsrs"},
                        {fieldname: "受灾距离", field: "distance"},
                    ],
                    gasStation: [
                        {fieldname: "企业名称", field: "qymc", listFlag: true},
                        {fieldname: "详细地址", field: "dz"},
                        {fieldname: "企业类型", field: "qylx"},
                        {fieldname: "等级划分", field: "djhf"},
                        {fieldname: "总容积", field: "zrj"},
                        {fieldname: "受灾距离", field: "distance"},
                    ],
                    hospital: [
                        {fieldname: "医院名称", field: "ylwsjgmc", listFlag: true},
                        {fieldname: "详细地址", field: "dz"},
                        {fieldname: "医院等级", field: "yydj"},
                        {fieldname: "在岗职工数 ", field: "zgzgrs"},
                        {fieldname: "卫生技术人员总数", field: "wsjsryzs"},
                        {fieldname: "注册护士数", field: "zchrs"},
                        {fieldname: "受灾距离", field: "distance"},
                    ],
                    shelter: [
                        {fieldname: "名称", field: "yjbncsmc", listFlag: true},
                        {fieldname: "地址", field: "dz"},
                        {fieldname: "应急避难场所建设类型", field: "yjbncsjslx"},
                        {fieldname: "物资储备类型", field: "wzcblx"},
                        {fieldname: "应急设施情况", field: "yjssqk"},
                    ],
                    reserve: [
                        {fieldname: "储备库名称", field: "cbkmc", listFlag: true},
                        {fieldname: "地址", field: "dz"},
                        {fieldname: "储备库认定或主管部门", field: "cbkrdhzgbm"},
                        {fieldname: "储备库等级", field: "cbkdj"},
                        {fieldname: "储备库类型", field: "cbklx"},
                    ]
                }
            }
        },
        methods: {
            closeinfobigbox(){
                this.$emit("closeinfoBox")
            }
        }
    }
</script>

<style>
    .el-descriptions .is-bordered {
        table-layout: fixed;
    }

    .el-descriptions--mini.is-bordered .el-descriptions-item__cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 4px;
    }
</style>
