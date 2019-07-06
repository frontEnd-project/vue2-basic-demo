import Vue from 'vue';
import Vuex from 'vuex';
import {confDatasFace} from './storeFace';
import {workListFace} from '@/views/build-site/work-faces';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    confDatas: <confDatasFace> {
      currentName: '',
      listData: []
    },
    a: 1
  },
  mutations: {
    changeConfDatas(state, data: workListFace) {
      const index = state.confDatas.listData.findIndex((item) => item.name === data.name);
      const {listData} = state.confDatas;
      if (index === -1) {
        listData.push(data);
      } else {
        listData.splice(index, 1, data);
      }
      state.confDatas.currentName = data.name;
    }
  },
  actions: {
  }
});


export default store;
