<template>
  <div>
    <input type="button" value="添加" @click="addCount" />
    <div v-for='item in countArr'>
      <input type="button" value="+" @click='addIncHandle(item.id)'  />
      <span>{{item.count}}</span>
      <input type="button" value="-" @click='deIncHandle(item.id)' />
    </div>
    <p>{{count}}</p>
  </div>
</template>
<script>

import {mapState} from 'Vuex';

export default {
  computed:{
    ...mapState(['countArr']),
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    addIncHandle(id){
      this.$store.commit('addInc', {
        id: id
      })
    },
    deIncHandle(id){
      this.$store.commit('deInc', {
        id: id
      })
    },
    addCount(){
      // 添加一个
      this.$store.commit('addCount')
    }
  }
}
</script>
