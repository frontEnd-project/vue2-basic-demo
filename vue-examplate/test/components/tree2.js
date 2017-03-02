
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

//tree-nav tree-contro
Vue.component("tree-item",{
	props:{
		item:{},
		level:{
			type:Number,
			default:0
		},
		init:{},
		open:{
			type:Boolean
		},
		initData:{}
	},
	data(){
		return {
			opens:this.open
		}
	},
	watch:{
		"item.child":function (){
			this.opens = true;
			this.addClass();
		}
	},
	computed:{
		isFoder(){
			return this.item.child &&　this.item.child.length
		},
		computedLevel(){
			var l = this.level;
			return ++l;
		},
		h(){
			console.log(this.initData);
			console.log(this.item);
		}
	},
	template:`
		<li :h="h">
		    <div class="tree-title" 
		    	 :class="{'tree-contro-none':!isFoder,'tree-contro':opens,'tree-nav':initData===item.child}"
		    	:style="{'padding-left':computedLevel*16+'px'}"
		    	@click="toggle"
		    	ref="abc"
		    >
		        <span>
		            <strong class="ellipsis">{{item.title}}</strong>
		            <i class="ico"></i>
		        </span>
		    </div>
		    <ul v-if="isFoder" v-show="opens" >
		    	<tree-item 
		    		v-for="item of item.child" 
		    		:item="item"
		    		:level="computedLevel"
		    		:init = 'init'
		    		:open="open"
		    		:initData="item.child"
		    	></tree-item>
		    </ul>
		</li>
	`,
	methods:{
		toggle(){
			//if( this.isFoder ){
				this.opens = !this.opens;
				this.addClass();
			//}
			if( !this.isFoder ){
				this.$set(this.item,'child',[]);
			}
			v.$emit("changeCurrent",{_this:this});

			v.$emit("changeCurrent",{element:this.item.chidren});
		},
		addClass(){
			v.$emit("changeCurrent",{element:this.$refs.abc});
			var _this = this;
			/*if(_this.init ){
				$(_this.init).removeClass('tree-nav');
			}
			//当渲染结束之后再操作元素
			this.$nextTick(function (){
				$(_this.$refs.abc).addClass('tree-nav');	
			})*/
		}
	}
})

Vue.component("tree-list",{
	props:["treeData",'open'],
	data(){
		return {
			init:null,
			initData:this.treeData.child
		}
	},
	methods:{
		changeCurrent(option){
			if( option.element ){
				this.init = option.element;
			}

			if(option._this){
				this.$emit("toggle-tree",option._this);
			}
			
			
		}
	},
	template:`
		<ul>
			<tree-item 
				v-for="item of treeData" 
				:item="item"
				:init="init"
				:open="open"
				:initData="item.child"
			></tree-item>
		</ul>
	`,
	mounted(){
		v.$on("changeCurrent",this.changeCurrent)
	}
})

new Vue({
	el:".tree-menu",
	data:{
		model:data,
		initItem:data
	},
	methods:{
		toggleClick(_this){
			this.initItem = _this.item.child;
		},
		addItem(){
			this.initItem.push({
				title:123
			})
		}
	}
})