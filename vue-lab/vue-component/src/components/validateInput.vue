<template>
    <div>
        <input ref="input" v-model="t"  :name="name" :placeholder='placeholder'/>
        <span class="tip error">{{tipMessage}}</span>
    </div>
</template>
<script>

import schema from 'async-validator'
//var validator = new schema(descriptor);

export default {
    data(){
        return {
            t:this.title,
            tipMessage: '提示'
        }
    },
    props:{
        title:{
            type: [String,Number],
            default: ''
        },
        name:{
            type: [String,Number],
            default: ''
        },
        rules:{
            type:Object,
            default:()=>({})
        },
        placeholder:{
            type:String,
            default:''
        }
    },
    created() {
        this.validator = new schema(this.rules);
        // 验证的函数
        this.v = this.validator.validate.bind(this.validator);
    },
    mounted() {
        Object.keys(this.rules).forEach(key => {
            if(Array.isArray(this.rules[key])){
                this.rules[key].forEach((item) => {
                    if(item.event){
                        console.log(this.$refs.input);
                        this.$refs.input.addEventListener(item.event,() => {
                            console.log({[this.name]:this.t});
                            this.validate({[this.name]:this.t})
                        })
                    }
                })
            }
        })
    },
    watch: {
        t(){
            this.$emit('input',this.t)
        }
    },
    methods: {
        validate(data={},callback=function(){}){
            this.v(data,(errors, fields) => {
                if(errors) {
                    this.tipMessage = errors[0].message;
                    callback(false)
                    return;
                }
                this.tipMessage = '通过'
                callback(true)
                // validation passed
            })
        }
    },
}
</script>
<style>
    input:focus {
        outline: 0;
    }
    input:focus {
        border: 1px solid #1e78e7;
    }
    .error {
        color: red;
    }
</style>