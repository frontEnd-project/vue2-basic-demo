
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
]

Vue.component("tree-item",{
	template:`
		<li>
	        <div class="tree-title tree-nav tree-contro">
	            <span>
	                <strong class="ellipsis">微云</strong>
	                <i class="ico"></i>
	            </span>
	        </div>
        </li>
	`
});

var count = 0;
Vue.component("tree-list",{
	data(){
		return {
			display: this.displayProps,
			count:count++,
			open:false
		}
	},
	props:["treeData","displayProps"],
	template:`
		<ul v-show="display">
			<li v-for="item,index in treeData">
		        <div
		        	class="tree-title" 
		        	:style="{'padding-left':count*16+'px'}"
		        	@click="clickHandle(index)"
		        >
		            <span>
		                <strong class="ellipsis">{{item.title}}</strong>
		                <i class="ico"></i>
		            </span>
		        </div>
		        <tree-list  
		        	:display-props="open" 
		        	:ref="'tree'+index" 
		        	v-if="item.child" 
		        	:tree-data="item.child"></tree-list>
	        </li>
		</ul>
	`,
	computed:{
		isChild:function (){
			return this.treeData.child && this.treeData.child.length;
		}
	},
	methods:{
		clickHandle(index){
			var ul = this.$refs["tree"+index] && this.$refs["tree"+index][0];
			console.log( this.isChild );
			if(this.isChild){
				this.open = true;
			}
			
		}
	}
})

new Vue({
	el:".tree-menu",
	data:{
		tree:data
	}
})