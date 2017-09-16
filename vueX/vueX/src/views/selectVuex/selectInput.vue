<template>
    <div class="clearFix">
      <input 
        readonly='readonly' 
        class="keyWord"
        @click='showListHandle'
        :value='title'
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  props: ['isShow'],
  computed: {
    initShow(){
      return this.isShow
    },
    title(){
      console.log(this.$store.state)
      return this.$store.state.title
    }
  },
  methods: {
    showListHandle(){
      // 通知父级改变listShow 或者在这里改变，同事改变父级的listshow
      this.$emit("update:isShow", !this.initShow);
    }
  }
  
}
</script>
