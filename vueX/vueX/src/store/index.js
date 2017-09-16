import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    title: 'hello',
    count: 0,
    countArr: [
      {
        id:1,
        count: 1
      }
    ]
  },
  mutations: {
    changeTitle(state, newTitle){
      state.title = newTitle;
    },
    addInc(state, reyload){

     let o =  state.countArr.filter((item) => {
        return item.id == reyload.id
      })
      o[0].count += 1
    },
    deInc(state, reyload){
      state.count -= 1;
    },
    addCount(state){
      state.countArr.push({
        id:new Date().getTime(),
        count: 1
      })
    }
  }
})

export default store;