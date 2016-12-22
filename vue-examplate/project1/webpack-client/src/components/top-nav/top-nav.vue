<template>
  <el-tabs :active-name="activeName">
    <el-tab-pane v-for="item in list" :label="item">{{item}}</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
      return {
        list: this.$store.getters.threeOptions,
        activeName: 'first'
      };
    }
}
</script>

<style>

</style>
