<template>

  <div class="content">
    <div class="slide-left">
      <div>
        <span
                v-for="itme,index in tabList"
                @click="tabHandle(index)"
        >
          {{ itme }}
        </span>
      </div>
      <hr />
      <div class="view">
        <p>基本信息</p>
        <p>教育经历</p>
        <p>基本信息</p>
        <p>基本信息</p>
        <p>基本信息</p>
      </div>
    </div>
    <slide-right></slide-right>
  </div>
</template>

<script>
import slideRight from './slide-right/slide-right.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabList: [
        '基本信息',
        '教育经历',
        '工作经历',
        '项目经历',
        '技能评估'
      ]
    }
  },
  methods:{
    tabHandle(index){
      console.log(index);
    }
  },
  components: {
    slideRight
  },
  created(){
      this.$http.get('http://localhost:8088/abc').then(function(res){
        console.log(res)
      })
  }
}
</script>

<style>
  .slide-left {
        width: 500px;
        height: 500px;
        border: 1px solid #ccc;
        float: left;
  }
  .slide-right {
        width: 200px;
        height: 500px;
        border: 1px solid #ccc;
        float: left;
  }
</style>
