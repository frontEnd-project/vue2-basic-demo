<template>
  <div>
    WorkPic---
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class WorkPic extends Vue {
  @Prop({default: () => ({})}) readonly showData!: string;
}
</script>

<style lang="stylus">
</style>
