/**
 * Created by wangyun on 16/12/22.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    list:[
      {
        id:Math.random(),
        title:"hello",
        isChecked:true
      },
      {
        id:Math.random()+1,
        title:"hello123",
        isChecked:true
      }

    ]
  },
  mutations:{
    addItem(state,title){
      state.list.push({
        id:Math.random(),
        title:title,
        isChecked:false
      })
    },
    destroyItem(state,id){
      state.list = state.list.filter(function(value){
        return value.id != id
      });

      console.log(state.list);
    }
  }
});

export default store;

