/**
 * Created by wangyun on 16/12/12.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    navList:["基本信息","教育经历","工作经历","技能评估"]
  },
  getters:{
    threeOptions: state => {
      return state.navList.slice(0,3);
    }
  },
  mutations:{
    addItem :(state,item) => {
      state.navList.push(item);
    }
  }
})
