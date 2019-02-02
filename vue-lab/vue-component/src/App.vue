<template>
  <div id="app">
    <validate-input 
      ref="vInput" 
      v-model="formData.title"
      placeholder="广告标题不能为空"
      :rules="rules"
      name="title"
    ></validate-input>
    {{formData.title}}
    <button @click="send">提交</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
        return {
            formData:{
              title:''
            },
            rules:{
                title: [
                  {event:'blur',type: "string", required: true, message:'必须填写'},
                  {event:'input',type: "string", required: true, max:8,message:'长度必须是8个'},
                ]
            }
        }
    },
    methods: {
        send(){
          console.log(this.$refs.vInput);
            this.$refs.vInput.validate(this.formData, (errors, fields) => {
                console.log('errors: ', errors);
            });
        }
    }
}
</script>

<style>

</style>
