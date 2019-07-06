import Vue from 'vue';
import App from './App.vue';
import store from '@/store/index';
import draggable from 'vuedraggable';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('draggable', draggable);
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
