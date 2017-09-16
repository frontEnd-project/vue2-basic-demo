<template>
    <ul class="list">
      <li @click="getTitleHandle(item.title)" v-for='item in listData'>{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  props: ['listData'],
  methods: {
    getTitleHandle(title){
      // 把选中的title放在input中
      // 兄弟组件之间的数据传递
      // 先要传给父级，再传入到input中

      this.$emit('getTitle', title)
      this.$emit('update:isShow', false)
    }
  }
}
</script>
