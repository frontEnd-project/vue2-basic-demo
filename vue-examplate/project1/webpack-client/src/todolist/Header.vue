<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           autofocus=""
           autocomplete="off"
           placeholder="What needs to be done?"
           @keyup.13="addItem"
           v-model="todo"

    >
  </header>
</template>

<script>
export default {
  data(){
    return {
      todo:""
    }
  },
  methods:{
    addItem(){
      this.$store.commit("addItem",this.todo);
      this.todo = '';
    }
  }
}
</script>
