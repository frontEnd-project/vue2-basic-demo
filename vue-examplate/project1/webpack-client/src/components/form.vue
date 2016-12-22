<template>
  <el-form :model="form" :rules="rules" ref="ruleForm">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="个性域名" prop="yuming">
      <el-input v-model="form.yuming"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
     data(){

        function yumingFn(rule,value,cb){

            if( value === '' ){
              cb("不能为空")
            }else if(!(/^\w{3,5}$/g.test(value))){
              cb("不能小于5个字符")
            }else{
              cb();
            }
        }

        return {
          form:{
            name: '',
            yuming:''
          },
          rules:{
            name:{
              required: true,
              meesage:"必须填写",
              trigger:"blur"
            },
            yuming:{
              validator:yumingFn,
              trigger:"blur"
            }
          }
        }
     },
     methods:{
        handleSubmit(){
            console.log(1);
            this.$refs.ruleForm.validate((valid) => {

              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        }
     }
  }
</script>

<style>

</style>
