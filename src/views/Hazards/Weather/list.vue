<template>
    <panel-widget :title="title" :close-visible="false">
        <div></div>
    </panel-widget>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
    title(val){
        console.log(val,"99999");
        return this.$store.state.title
    }
    },
    methods:{
        close(){
            this.$emit("closelist")
        }
    }
}
</script>
<style>

</style>