
datas = data.files.map(function (item,index){

    //是否是编辑状态
    item.isEdtor = false;

    return item;  
});

var initId = 0;

var initDate = dataAction.getChildsById(datas,initId);

var vm = new Vue({
    data:{
        fileDate:initDate
    },
    methods:{
        createNewFile(){
           this.fileDate.unshift({
                title:"",
                isEdtor:true
            }) 
        }
    }
});

vm.$mount("#demo");

