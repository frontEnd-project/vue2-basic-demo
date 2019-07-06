<template>
  <div class="icon-area">
    <div v-for="(item,index) in iconsData" :key="index">
      <h3>{{item.title}}</h3>
      <draggable
        :list="item.config"
        element="ul"
        :options="{group:{ name:'widget', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
      >
        <li
          :value="option.title" 
          v-for="option in item.config" :key="option.name">
          <span>{{option.title}}</span>
        </li>
      </draggable>
    </div>
  </div>
</template>

<script  lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {iconsData} from './data-icons';

@Component
export default class AreaIcon extends Vue {
  private iconsData = iconsData;
}
</script>

<style lang="stylus">
.icon-area
  button 
    cursor move
</style>
