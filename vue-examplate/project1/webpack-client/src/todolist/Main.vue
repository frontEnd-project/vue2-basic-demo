<template>
  <section class="main" v-show="list.length">
    <input class="toggle-all" type="checkbox">
    <ul class="todo-list">
      <Item v-for="item,index in list" :key="index" :item="item"/>
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
  created(){
    console.log(this.$store.state.list);
  },
  components:{Item}
}
</script>
