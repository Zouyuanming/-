import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/styles/index.scss'//全局样式
import store from './store'
import * as echarts from 'echarts';


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(echarts)

Vue.config.productionTip = false
Vue.prototype.echarts = echarts

import PanelWidget from './components/PanelWidget/PanelWidget'
Vue.component("PanelWidget", PanelWidget)

Array.prototype.indexOf = function(val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

//匹配是否含有相同字段值
Array.prototype.indexOfByProp = function(val, prop) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][prop] == val[prop]) return i;
  }
  return -1;
};

Array.prototype.remove = function(val) {
  let index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
