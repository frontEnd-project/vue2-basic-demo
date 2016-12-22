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
  }
}
</script>

<style src="./base.css"></style>
<style src="./index.css"></style>
