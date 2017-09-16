<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync='listShow'></select-input>
        <list :list-data='listData' :is-show.sync='listShow' v-show='listShow'></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/views/selectVuex/selectInput'
import list from '@/views/selectVuex/list'

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
      listData:listData
    }
  },

  components: {
    selectInput,
    list
  },
  methods: {
  }
}
</script>
