<template>
  <li class="todo" :class="{completed:item.isChecked}">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        v-model="item.isChecked"
      />
      <label>{{item.title}}</label>
      <button class="destroy" @click="destroyItem(index)"></button>
    </div>
    <input class="edit" type="text">
  </li>
</template>

<script>
  export default {
    props:["item","index"],
    methods:{
      destroyItem(todo){
          this.$store.commit("destroyItem",todo);
      }
    }
  }
</script>

<style>

</style>
