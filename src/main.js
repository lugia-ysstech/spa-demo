import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './single-spa-config.js'

Vue.config.productionTip = false;
Vue.use(Ant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
