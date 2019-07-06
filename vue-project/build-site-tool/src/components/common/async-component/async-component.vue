<template>
  <component :is="currentView" :show-data="showData"></component>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
const factory = (path: string) => ({
  component: import(`@/${path}`)
});
@Component
export default class AsyncComponent extends Vue {
  @Prop({default: ''}) readonly path!: string;
  @Prop({default: () => ({})}) readonly showData!: string;
  currentView = this.load;
  load() {
    this.currentView = () => factory(this.path);
  }
}
</script>

<style lang="stylus">
</style>
