<template>
    <div>
        <NavList class="nav" :navDatas="navData"></NavList>
        <router-view />
    </div>
</template>

<script>
    import NavList from "../../components/NavList/NavList"
    import {mapState} from "vuex"
    export default {
        name: "index",
        computed: {
            ...mapState({
                navData: state => state.natural.menu
            })
        },
        components:{
            NavList
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .nav{
        position: absolute;
        left: 10px;
        top: 80px;
    }

</style>
