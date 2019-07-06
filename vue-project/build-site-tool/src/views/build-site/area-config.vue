<template>
  <div>
    <div v-for="item in confDatas.listData" :key="item.id">
      <async-component 
        :path="'components/area-config/'+item.configComponentName"
        v-show="item.name === confDatas.currentName"
        :show-data="item"
      ></async-component>
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import asyncComponent from '@/components/common/async-component/async-component.vue';
import {confDatasFace} from '@/store/storeFace';
@Component({
  components: {
    asyncComponent
  }
})
export default class AreaConfig extends Vue {
  get confDatas(): confDatasFace {
    return this.$store.state.confDatas;
  }
}
</script>

<style lang="stylus">
</style>
