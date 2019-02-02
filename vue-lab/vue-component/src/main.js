import Vue from 'vue'
import App from './App.vue'
import components from '@/components/index.js'
Vue.config.productionTip = false

// 加入全局的组件

Vue.use(components)


new Vue({
  render: h => h(App),
}).$mount('#app')
