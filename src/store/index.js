import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const files = require.context('./module', false, /\.js$/);
const modules = {};
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
});
export default new Vuex.Store({
  state: {
    pageSize: 5, //请求列表条数
    message:[],
    name:'',
    descriptions:"",
    eventName:"",
    detail:'',
    type:"",
    title:""

  },
  mutations: {
    setValue(state,{message,name}){
        state.message=message
        state.name=name
        console.log(new Date().toString(),"接受数据")
    },
    openlayer(state,{description,eventName}){
          state.descriptions=description
          state.eventName=eventName
    },
    openinfoBox(state,{detail,type}){
            state.detail=detail
            state.type=type
    },
    sendtitle(state,title){
            state.title=title
    },
    sendtitles(state,title){
      console.log(11111)
      state.title=title
      console.log(state.title,"111111111111111")
    }
  },
  actions: {

  },
  modules:modules
})
