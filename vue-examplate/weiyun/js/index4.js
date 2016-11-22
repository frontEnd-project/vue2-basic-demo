
datas = data.files;

var initId = 0;

var initDate = dataAction.getChildsById(datas,initId);

var vm = new Vue({
    data:{
        fileDate:initDate
    }
});

vm.$mount("#demo");

