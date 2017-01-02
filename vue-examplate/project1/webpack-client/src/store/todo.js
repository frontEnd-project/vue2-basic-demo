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
  getters:{
    selecteNum(state){
      return state.list.filter(function(item){
        return item.isChecked;
      })
    },
    noSelecteNum(state){
      console.log(state.list.length);
      return store.getters.selecteNum.length;
    },
    isSelectAlls:(state)=>{
      return store.getters.selecteNum.length === state.list.length
    }
  },
  mutations:{
    addItem(state,title){
      state.list.push({
        id:Math.random(),
        title:title,
        isChecked:false
      })
    },
    destroyItem(state,todo){
      //使用重置state.list的方式操作不成功
      state.list.splice(todo,1);
    },
    changeALl(state,bl){
      state.list.forEach(function(item){
        item.isChecked = bl;
      })
    }
  }
});

export default store;

