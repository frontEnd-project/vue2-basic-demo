
var data = [
	{
		id:Math.random(),
		userName:"张三",
		age:30,
		startTime:'2016-09-10',
		job:"前端"
	},
	{
		id:Math.random(),
		userName:"张三",
		age:30,
		startTime:'2016-09-10',
		job:"java"
	}
]

var vm = new Vue({
	data:{
		userList:data,
		dialog:"",
		closeDialog:true,
		delectItemById:''
	},
	methods:{
		delectItem:function (index){
			this.dialog = dialog;	
			this.delectItemById = index;
			this.closeDialog = true;
		},
		ok(){
			if( this.delectItemById !== '' ){

				this.userList.splice(this.delectItemById,1);
				this.delectItemById = '';
				this.closeDialog = false;
			}
		},
		canval(){
			this.closeDialog = false;
		}
	}
});

vm.$mount("#demo");