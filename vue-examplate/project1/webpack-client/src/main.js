// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './todolist/Index'
import store from './store/todo.js'
import Router from 'vue-router';
import vueResource from 'vue-resource';


Vue.use(Router);
Vue.use(vueResource);

var router = new Router();

["all","active",""].forEach(function(){

})

router.afterEach(function(transition){
  switch(transition.path.replace("/","")){
    case "":
      break;
    case "all":
      router.app.visibility = "all";
      break;
    case "active":
      router.app.visibility = "all";
      break;
    case "completed":
      router.app.visibility = "all";
      break;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render:(h)=>h(App)
})
