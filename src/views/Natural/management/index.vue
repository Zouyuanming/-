<template>
    <div>
        <eventTable ref="eventTable"
                    class="event-table"
                    @selectEventData="selectEventData"
                    @openAdd="addVisible = true"
                    @infoopen="infoVisible=true">
        </eventTable>
        <analyse v-if="analyseVisible"
                 class="analyse"
                 :eventData="eventData"
                 @close="closeAnalyse">

        </analyse>
        <buffer-search v-if="bufferVisible"
                       class="buffer"
                       :eventData="eventData"
                       @close="closeBuffer"
                       @infoBoxopen="infoBoxVisible=true">

        </buffer-search>
        <add-event v-if="addVisible"
                   class="addEvent"
                   :disasterType="disasterType"
                   @close="addVisible = false"
                   @refreshData="refreshData">

        </add-event>
        <info v-if="infoVisible"
              class="info"
              @closeinfo="closeinfo"
        >

        </info>
        <infoBox v-if="infoBoxVisible" 
                 class="infoBox"
                 @closeinfoBox="closeinfoBox"
        
        >
        </infoBox>
    </div>
</template>

<script>
import infoBox from "./infoBox.vue"
    import info from"./info.vue"
    import eventTable from "./eventTable";
    import analyse from "./analyse";
    import bufferSearch from "./bufferSearch";
    import addEvent from "./addEvent";
    import {getDisasterType} from "../../../api/services/api";


    export default {
        name: "index",
        components: {
            eventTable,
            analyse,
            bufferSearch,
            addEvent,
                info,
                infoBox
        },
        data() {
            return {
                infoBoxVisible:false,
                infoVisible:false,
                eventData: {},
                analyseVisible: false,
                bufferVisible: false,
                disasterType: [],
                addVisible: false
            }
        },
        mounted() {
            this.getDisasterType()
        },
        methods: {
            closeinfoBox(){
                this.infoBoxVisible=false
            },
            closeinfo(){
                this.infoVisible=false
            },
            openinfo(){
                this.infoVisible=true
            },
            refreshData(){
                this.$refs.eventTable.getEventList()

            },
            selectEventData(data, flag) {
                this.eventData = data
                if (flag === 'analyse') {
                    this.analyseVisible = true
                    this.bufferVisible = false
                }

                if (flag === 'buffer') {
                    this.analyseVisible = false
                    this.bufferVisible = true
                }

            },
            getDisasterType() {
                getDisasterType().then(res => {
                    this.disasterType = res.data
                })
            },
            closeAnalyse() {
                this.analyseVisible = false
            },
            closeBuffer() {
                this.bufferVisible = false
            }
        }
    }
</script>

<style scoped>
    .event-table {
        position: absolute;
        top: 80px;
        left: 100px;
        z-index: 99;
    }

    .analyse {
        position: absolute;
        top: 80px;
        left: 48%;
        z-index: 100;
    }

    .buffer {
        position: absolute;
        top: 80px;
        left: 48%;
        z-index: 100;
    }

    .addEvent {
        position: absolute;
        top: 80px;
        left: 48%;
        z-index: 100;
    }
    .info{
        position: absolute;
        top: 65%;
        left: 5%;
        z-index: 100;
    }
    .infoBox{
    position: absolute;
    right: 10%;
    top: 60%;
    z-index: 200;
}
</style>
