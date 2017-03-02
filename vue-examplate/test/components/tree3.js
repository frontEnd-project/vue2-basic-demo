
var data = [
	{
		title:"微云",
		child:[
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
		]
	}
];

var v = new Vue();

Vue.component("tree-item",{
	props:{
		item:{
			type:Object
		},
		open:{
			type:Boolean
		},
		count:{
			type:Number,
			default:0
		},
		selectData:{
			type:Object
		}
	},
	computed:{
		paddingLeft:function (){
			
			return {
				'padding-left':(this.addCount)*18+'px'
			}	
		},
		addCount(){
			var c = this.count;
			return ++c;
		},
		isChild(){
			return this.item.child && this.item.child.length
		},
		addClass(){
			return {
				'tree-contro-none':!this.isChild,
				'tree-contro':this.childOpen,
				'tree-nav':this.item === this.selectData
			}
		}
	},
	data(){
		return {
			childOpen:this.open
		}
	},
	watch:{
		'item.child':function(){
			this.childOpen = true;
		}
	},
	methods:{
		toggle(){
			this.childOpen = !this.childOpen;

			if( !this.item.child ){
				this.$set(this.item,"child",[]);
			}
			v.$emit("changeSelectData",this.item);
		}
	},
	template:`
			<li>
		        <div
		        	class="tree-title"
		        	:class='addClass'
		        	:style='paddingLeft'
		        	@click="toggle"
		        >
		            <span>
		                <strong class="ellipsis">{{item.title}}</strong>
		                <i class="ico"></i>
		            </span>
		        </div>
		        <ul v-if="item.child" v-show="childOpen">
			        <tree-item
			        	v-for="item in item.child"
			        	:item = "item"
			        	:open="open"
			        	:count='addCount'
			        	:select-data="selectData"
			        ></tree-item>
		        </ul>
        </li>
	`
})

Vue.component("tree-list",{
	props:{
		treeDate:{
			type:Array,
			default:[]
		},
		open:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			selectData:this.treeDate[0]
		}
	},
	template:`
			<ul>
				<tree-item 
					v-for="item of treeDate" 
					:item="item" :open='open' 
					:select-data="selectData"
				></tree-item>		
			</ul>
	`,
	mounted(){
		v.$on("changeSelectData", (item) => {
			this.selectData = item;
			this.$emit("node-click",{
				item:item
			});
		})
	}
})


new Vue({
	el:".tree-menu",
	data:{
		model:data,
		open:false,
		currentItem:data[0].child
	},
	methods:{
		addItem(){
			this.currentItem.push({
				title:"123"
			})
		},
		handleNodeClick(options){
			this.currentItem = options.item.child;
		}
	}
})