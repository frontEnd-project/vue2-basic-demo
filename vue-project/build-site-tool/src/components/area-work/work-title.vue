<template>
  <div>
    WorkTitle---
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class WorkTitle extends Vue {
  @Prop({default: () => ({})}) readonly showData!: string;
}
</script>

<style lang="stylus">
</style>
