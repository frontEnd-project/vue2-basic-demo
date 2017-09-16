import Vue from 'vue'
import Router from 'vue-router'


import Select from '@/components/select'
import selectVuex from '@/views/selectVuex/select'
import inc from '@/views/increment/inc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
      path: '/select',
      name: 'Selects',
      component: selectVuex
    },
    {
      path: '/increment',
      name: 'increment',
      component: inc
    }
  ]
})
