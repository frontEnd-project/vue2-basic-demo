<template>
  <div>
    WorkCountdown---
    <p>{{value.title}}</p>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {countdownFace, countdownTotleFace} from '@/components/area-config/countdown/conf';
@Component
export default class WorkCountdown extends Vue {
  @Prop({default: () => ({})}) readonly showData!: countdownTotleFace;
  get value(): countdownFace {
    return this.showData.value;
  }
}
</script>

<style lang="stylus">
</style>
