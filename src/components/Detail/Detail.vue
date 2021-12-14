<template>
    <panel-widget :title="title" @close="close">
        <div style="width: 500px;max-height: 800px;overflow-y: auto">
        <el-descriptions border size="mini" :column="2">
            <el-descriptions-item v-for="(item, index) in field" :key="index" :label="item.fieldname">
                <span>{{formatValue(detailData[item.field])}}</span>
            </el-descriptions-item>
        </el-descriptions>
        </div>
    </panel-widget>
</template>

<script>

    import Fields from "../../assets/Fields"
    export default {
        name: "Detail",
        computed:{
            detailData(){
                return this.$store.state.message 
            },
            element(){
                return this.$store.state.name
            },
            field: function () {
                return Fields[this.element]
            },
        },
        data(){
            return {
                title: "详细信息",
            }
        },
        methods:{
          close(){
              this.$emit("close")
          },
          formatValue(val){
            //   this.$emit("open")
              if(val== null || val._value == null){
                  console.log(new Date().toString(),"渲染数据")
                  return ""
              }
              return val
          }
        },
    }
</script>

<style scoped>

</style>
