
import validateInput from '@/components/validateInput'

let components = {
    validateInput
}


export default {
    install(Vue){
        Object.keys(components).forEach(key => {
            console.log(key);
            Vue.component(key,components[key])
        })
    }
}