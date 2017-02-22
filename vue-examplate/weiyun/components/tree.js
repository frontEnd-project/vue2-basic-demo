
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
		console.log( this.displayProps );
		return {
			display: this.displayProps,
			p:123,
			count:count++
		}
	},
	props:["treeData","displayProps"],
	template:`
		<ul v-show="display" :abc="p">
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
		        <tree-list  :display-props="displayProps" :ref="'tree'+index" v-if="item.child" :tree-data="item.child"></tree-list>
	        </li>
		</ul>
	`,
	methods:{
		clickHandle(index){
			var ul = this.$refs["tree"+index] && this.$refs["tree"+index][0];
			if(ul){
				ul.display = !ul.display;
				ul.displayProps = false;
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