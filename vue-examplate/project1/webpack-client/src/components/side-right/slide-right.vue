<template>
  <ul>
    <li @click='addItem' v-for="item of list">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: "side-right",
    data(){
      return {
        list:[]
      }
    },
    methods:{
      addItem(){
       // this.$store.commit("addItem","hello");
      }
    }
  }
</script>

<style>

</style>
