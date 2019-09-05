<template>
	<div id="app">
		<p @click="type=!type">显示隐藏</p>
		<div>
			<alee v-show="type"></alee>
		</div>
	</div>
</template>

<script>
	import alee from './a.vue'
	export default{
		data(){
			return{
				type:true,
			}
		},
		components:{
			alee
		}
	}
</script>

<style>
	*{margin:0;padding:0;}
	#app{
		line-height: 200px;
		font-size: 60px;
	}
</style>
