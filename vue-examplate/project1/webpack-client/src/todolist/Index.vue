<template>
  <section class="todoapp" id="demo">
    <HeaderComponent />
    <MainComponet />
    <FooterComponet />
  </section>
</template>

<script>
import HeaderComponent from './Header'
import MainComponet from './Main'
import FooterComponet from './Footer'
export default {
  name:"Todo",
  components:{
    HeaderComponent,
    MainComponet,
    FooterComponet
  },
    created(){
    this.$http.jsonp("https://api.douban.com/v2/book/search?q=javascript")
    .then(function(data){
      return data.json();
    }).
    then(function(data){
      console.log(data);
    })
  }
}
</script>

<style src="./base.css"></style>
<style src="./index.css"></style>
