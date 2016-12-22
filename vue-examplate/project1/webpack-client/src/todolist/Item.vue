<template>
  <li class="todo" :class="{completed:item.isChecked}">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        v-model="item.isChecked"
      />
      <label>{{item.title}}</label>
      <button class="destroy" @click="destroyItem(item.id)"></button>
    </div>
    <input class="edit" type="text">
  </li>
</template>

<script>
  export default {
    props:["item"],
    methods:{
      destroyItem(id){
          this.$store.commit("destroyItem",id);
      }
    }
  }
</script>

<style>

</style>
