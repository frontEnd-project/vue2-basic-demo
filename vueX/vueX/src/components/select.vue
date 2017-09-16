<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync='listShow' :title='title'></select-input>
        <list :list-data='listData' :is-show.sync='listShow' v-show='listShow' @getTitle="titleHandle"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title: 'javascript'
  },
  {
    title: 'html+css'
  },
  {
    title: 'jQuery'
  },
  {
    title: 'react'
  },
  {
    title: 'nodejs'
  }
]

export default {

  data(){
    return {
      listShow: false,
      listData:listData,
      title: ''
    }
  },

  components: {
    selectInput,
    list
  },
  methods: {
    titleHandle(title){
      console.log(title)
      this.title = title;
    }
  }
}
</script>
