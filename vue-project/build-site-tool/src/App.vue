<template>
  <div id="app">
    <el-container>
      <custome-header></custome-header>
      <el-main>
        <el-row  type="flex">
          <el-col :span="6">
            <area-icons></area-icons>
          </el-col>
          <el-col :span="12">
            <area-work></area-work>
          </el-col>
          <el-col :span="6">
            <h2>设置</h2>
            <area-config></area-config>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import AreaIcons from '@/views/build-site/area-icons.vue';
import AreaWork from '@/views/build-site/area-work.vue';
import AreaConfig from '@/views/build-site/area-config.vue';
import CustomeHeader from '@/components/common/custome-header/custome-header.vue';
@Component({
  components: {CustomeHeader, AreaIcons, AreaWork, AreaConfig}
})
export default class App extends Vue {}
</script>

<style lang="stylus">
  @import './assets/reset.stylus';
  .iconArea,.workArea,.configArea
    border: 1px solid #ccc

</style>
