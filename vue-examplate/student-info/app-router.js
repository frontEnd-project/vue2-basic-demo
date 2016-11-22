
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
];

const user = {
	template:`<div>
		<hr />
		<h3>修改人物信息</h3>
		{{$route.params.userId}}
	</div>`
}

const routes = [
	{
		path:"/user/:userId",
		name:"user",
		component:user
	}
];

const router = new VueRouter({
  routes 	
})

var vm = new Vue({
	router,
	data:{
		userList:data,
		dialog:"",
		closeDialog:true,
		delectItemById:'',
		isUser:false
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

console.log(vm.isUser);