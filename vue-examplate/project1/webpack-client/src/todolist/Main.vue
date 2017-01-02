<template>
  <section class="main" v-show="list.length">
    <input class="toggle-all" type="checkbox" v-model="isSelectAll">
    <ul class="todo-list">
      <Item v-for="item,index in list" :key="index" :item="item" :index="index"/>
    </ul>
  </section>
</template>

<script>
import Item from './Item'
export default {
  data(){
    return {
      list:this.$store.state.list
    }
  },
  computed:{
    isSelectAll:{
        get(){
          return this.$store.getters.isSelectAlls;
        },
        set(bl){
          this.$store.commit("changeALl",bl);
        }
    }
  },
  components:{Item}
}
</script>
