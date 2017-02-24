function h(data,rootDiv){
	for( var i = 0; i < data.length; i++ ){
		var d = document.createElement("div");
		d.innerHTML = data[i].title;
		d.data = data[i];
		if(data[i].child){
			h(data[i].child,d);
		}
		rootDiv.appendChild(d);
	}
}

function getParentsData(data,searchData){
	if( !searchData || typeof searchData !== "object"){
		return;
	}
	var rootDiv = document.createElement("div");
	h(data,rootDiv);
	var allDIv = rootDiv.querySelectorAll("div");
	var arr = [];
	var c = null;
	for( var i = 0; i < allDIv.length; i++ ){
		if( allDIv[i].data === searchData ){
			c = allDIv[i];
			break;
		}
	}	

	if(c){
		while(c !== rootDiv){
			arr.push(c.data);
			c = c.parentNode;
		}
	}

	return arr;
}

var data = [
	{
		title:"私人收藏",
		child:[
			{
				title:"我的音乐"
			},{
				title:"我的照片",
				child:[
					
					{
						title:"杰伦",
						child:[
							{
								title:"私人照"
							}
						]
					},
					{
						title:"王杰",
						child:[
							{
								title:"内衣秀"
							}
						]
					}
				]
			}
		]
	}
];

for( var i = 0; i < data.length; i++ ){
	document.createElement("div");
}



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
		},
		openItem:{
			type:Object
		},
		parentDatas:{
			type:Array
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
		},
		parentDatas(){
			if( this.parentDatas.includes(this.item) && !this.childOpen ){
				this.childOpen = true;
			}
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
		        	:custom-id="addCount"
		        >
		            <span>
		                <strong class="ellipsis">{{item.title}}</strong>
		                <i class="ico"></i>
		            </span>
		        </div>
		        <ul v-if="item.child" v-show="childOpen" :show="childOpen">
			        <tree-item
			        	v-for="item in item.child"
			        	:item = "item"
			        	:open="open"
			        	:count='addCount'
			        	:select-data="selectData"
			        	:open-item="openItem"
			        	:parent-datas="parentDatas"
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
		},
		openItem:{
			type:Object
		},
		initSelectData:{
			type:Object
		}
	},
	data(){
		return {
			selectData:this.initSelectData
		}
	},
	computed:{
		parentDatas(){
			if( this.a === this.selectData ){
				return this.abc;
			}else{
				this.abc = getParentsData(data,this.selectData);
				return this.abc;
			}
			
		}
	},
	watch:{
		initSelectData(){
			this.selectData = this.initSelectData;
		}
	},
	template:`
			<ul>
				<tree-item 
					v-for="item of treeDate" 
					:item="item" :open='open'
					:open-item="openItem"
					:select-data="selectData"
					:parent-datas="parentDatas"
				></tree-item>		
			</ul>
	`,
	mounted(){
		v.$on("changeSelectData", (item) => {
			this.$emit("node-click",{
				item:item
			});
		})
	}
})

Vue.component("file-list",{
	props:{
		fileData:{
			type:Array
		}
	},
	template:`
	<div class="file-list clearFix">
		<div class="file-item" v-for="file of fileData" @click="entryChildHandle(file)">
		    <div class="item">
		        <label class="checkbox"></label> 
		        <div class="file-img"><i></i></div> 
		        <p class="file-title-box">
		            <span class="file-title">{{file.title}}</span> 
		            <span class="file-edtor" style="display: none;">
		                <input type="text" class="edtor">
		            </span>
		        </p>
		    </div>
		</div>
	</div>
	`,
	methods:{
		entryChildHandle(file){
			this.$emit("file-click",file);
		}
	}
})

Vue.component("nav-list",{
	props:['selectData','parentDatas'],
	template:`
		<div class="path-nav-box clearFix">
		    <label class="checked-all"></label>
		    <div class="path-nav clearFix" >
		        <a v-for="item,index of parentDatas"  @click='handleNav(item)'
		            href="javascript:;" :style="{'z-index':parentDatas.length-index}">
		            {{ item.title }}
		        </a>
		        <span class="current-path" style="z-index:0;">{{selectData.title}}</span> 
		    </div>
		</div>
	`,
	methods:{
		handleNav(item){
			this.$emit("nav-click",item);
		}
	}
})

var a = null;

new Vue({
	el:".content",
	data:{
		model:data,
		open:false,
		openItem:data[0],   //控制指定展开
		currentItem:data[0].child, //当前操控的数据
		selectData:data[0]
	},
	computed:{
		hasChild(){
			return !(this.currentItem && this.currentItem.length);
		},
		parentDatas(){
			var ps = getParentsData(this.model,this.selectData).reverse();
				ps.pop();
			return ps;
		}
	},
	methods:{
		handleNodeClick(options){
			this.currentItem = options.item.child;
			this.selectData = options.item;
		},
		handleFileClick(file){
			this.currentItem = file.child;
			this.openItem = file;
			this.selectData = file;
		},
		handleNavClick(item){
			this.currentItem = item.child;
			this.selectData = item;
		}
	}
})