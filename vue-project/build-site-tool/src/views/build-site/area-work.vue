<template>
  <div style="height: 100%;">
    <draggable
      v-model="workListData"
      :options="{group:'widget', ghostClass: 'ghost'}"
      class="wrapper-list"
      @add="add"
      @end="end"
    >
    <div 
      v-for="item in workListDataCopy" :key="item.id"
      @click="selectItem(item)"
      class="wrapper-list-box"
    >
      <async-component
        :path="'components/area-work/'+item.workComponentName"
        :show-data="item"
      ></async-component>
    </div>
    </draggable>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {iconsDataFace} from './data-icons';
import componentsMap from './components-map';
import configMap from './config-map';
import {cloneDeep} from 'lodash';
import asyncComponent from '@/components/common/async-component/async-component.vue';
import {workListFace} from './work-faces';
@Component({
  components: {asyncComponent}
})
export default class App extends Vue {
  workListData: workListFace[] = [];
  workListDataCopy: workListFace[] = [];
  add(ev: any) {
    const item = this.workListData[ev.newIndex] || {
      title: '', name: '', iconUrl: ''
    };
    const itemData = {
      id: Date.now(),
      name: item.name,
      workComponentName: componentsMap[item.name].workComponentName,
      configComponentName: componentsMap[item.name].configComponentName,
      value: cloneDeep(configMap[item.name])
    };
    this.workListData.splice(ev.newIndex, 1, itemData);
    this.workListDataCopy = this.workListData;

    // commit数据
    this.$store.commit('changeConfDatas', itemData);
  }
  end() {
    this.workListDataCopy = this.workListData;
  }
  selectItem(itemData: workListFace) {
    // commit数据
    this.$store.commit('changeConfDatas', itemData);
  }
}
</script>

<style lang="stylus">
.wrapper-list 
  height: 100%
  border 1px solid #ccc

  .ghost
    background #fff
    border 1px dashed #409EFF
    width 100%
    height 50px
    position relative
    line-height 50px
    list-style none
    font-size 0
    &::after 
      content '放到这里'
      display block
      position absolute
      left 50%
      top 0
      font-size 16px
      color #999
      z-index 10
.wrapper-list-box 
  border 1px dashed #2aa7ff;
  margin-bottom 1px
  position relative

  .move 
    width 30px
    height 30px
    background-color red;
    position absolute
    left 0
    top 0
</style>
