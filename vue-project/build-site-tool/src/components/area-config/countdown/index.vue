<template>
  <div>
    <div>ConfCountdown</div>
    <input v-model="value.title" />
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {countdownFace, countdownTotleFace} from './conf';
@Component
export default class ConfCountdown extends Vue {
  @Prop({default: () => ({})}) readonly showData!: countdownTotleFace;
  get value(): countdownFace {
    return this.showData.value;
  }
}
</script>

<style lang="stylus">
</style>
