<template>
    <panel-widget class="analyse-container" :title="title" @close="close">
        <el-card class="box-card">
        <el-descriptions border title="灾害信息">
            <el-descriptions-item label="灾害名称">{{eventData.eventName}}</el-descriptions-item>
            <el-descriptions-item label="灾害类型">{{eventData.disasterType}}</el-descriptions-item>
            <el-descriptions-item label="发生时间">{{eventData.eventDate}}</el-descriptions-item>
            <el-descriptions-item label="经纬度">{{eventData.lon}}/{{eventData.lat}}</el-descriptions-item>
            <el-descriptions-item label="地点">{{eventData.address}}</el-descriptions-item>
        </el-descriptions>
            <el-row>
                <div style="height: 30px;line-height: 30px;padding-left: 10px;font-weight: 700;display: inline-block">灾情报告</div>
                <el-button type="text" @click="downLoad">下载</el-button>
            </el-row>
            <iframe :src="reportUrl" width="100%" height="600" frameborder="0" scrolling="auto" id="iframename" name="formIframe"></iframe>
        </el-card>
    </panel-widget>
</template>

<script>
    import {downLoadReport, getReportPreview} from "../../../api/services/api";
    export default {
        name: "analyse",
        components: {
        },
        props:{
            eventData:Object
        },
        data() {
            return {
                title:"灾害综合分析",
                reportUrl: ""
            }
        },
        methods: {
            close(){
              this.$emit('close')
            },
            getReportPreview(id){
                getReportPreview(id).then(res => {
                    this.reportUrl = res.data
                })
            },
            downLoad(){
                downLoadReport(this.eventData.id).then(res => {
                    let blob = new Blob([res.data], {
                        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'
                    })
                    let downloadElement = document.createElement("a")
                    let href = window.URL.createObjectURL(blob)
                    downloadElement.href = href
                    downloadElement.download = decodeURI(res.headers["content-disposition"].split("=")[1])
                    document.body.appendChild(downloadElement)
                    downloadElement.click()
                    document.body.removeChild(downloadElement)
                    window.URL.revokeObjectURL(href)
                })
            }
        },
        watch:{
            eventData:{
                handler:function (val) {
                    this.getReportPreview(val.id)
                },
                deep: true,
                immediate: true
            }
        }
    }
</script>

<style scoped>
    /deep/.box-card {
        border-radius: 0;
        width: 700px;
    }
    /deep/.el-card__body{
        padding: 0;
    }
    /deep/.el-descriptions__header{
        margin-bottom: 0px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
    }
</style>
