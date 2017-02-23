
var data = [
	{
		title:"第一级"
	},{
		title:"第一级",
		child:[
			{
				title:"第二级",
				child:[
					{
						title:"第3级"
					}
				]
			},
			{
				title:"第二级",
				child:[
					{
						title:"第3级"
					}
				]
			}
		]
	}
];
	
Vue.component("tree-item",{
	props:["item","counts",],
	data(){
		return {
			open:true
		}
	},
	computed:{
		count(){
			var c = this.counts;
			return ++c;
		}
	},
	template:`<li>
		        <div
		        	class="tree-title"
		        	:class="{'tree-contro-none':!item.child}"
		        	:style="{'padding-left':count*16+'px'}"
		        	@click="toggle"
		        >
		            <span>
		                <strong class="ellipsis">{{item.title}}</strong>
		                <i class="ico"></i>
		            </span>
		        </div>
		        <ul v-if="item.child" v-show="open">
			        <tree-item
			        	v-for="item in item.child"
			        	:item = "item" 
			        	:counts="count"
			        ></tree-item>
		        </ul>
	        </li>`,
	methods:{
		toggle(){
			this.open = !this.open;
		}
	}
})

Vue.component('tree-list',{
	data(){
		return {
			open:false
		}
	},
	props:{
		'treeData':{
			type:Array
		},
		"counts":{
			type:Number,
			default:-1
		}
	},
	template:`<ul>
				<tree-item v-for="item of treeData" :item="item" :counts="counts"></tree-item>
			</ul>`,
	methods:{
		toggle(){
			this.open = !this.open;
		}
	},
	computed:{
		paddingLeft(){
			return this.counts * 16
		},
		childCount(){
			var count = this.counts;
			return ++count;
		}
	}
})



new Vue({
	el:".tree-menu",
	data:{
		model:data
	}
})