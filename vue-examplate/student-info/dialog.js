//弹框的html结构
var temp = `<div v-show="closeDialog"><div id="dialog">
		<div class="dialog">
			<slot name="title"><h3>这是一个弹框</h3></slot>
			<slot name="content">
				<div class="content">
					这里是内容
				</div>
			</slot>
			<div>
				<input type="button" value="确认" @click="ok" />
				<input type="button" @click="close" value="取消" />
			</div>
		</div>
	</div>
	<div id="mask"></div></div>`;

var dialog = Vue.component("test-alert",{
	template:temp,
	props:['closeDialog'],
	methods:{
		close(){
			this.$emit("close-method");
		},
		ok(){
			this.$emit("ok");
		}
	}
});