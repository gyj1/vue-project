<template>
	<div>
		<h2>加减乘除计算器</h2>
		<div>
			<input type="button" value="-" @click="minHandle(2)"/>
			<span>{{num}}</span>
			<input type="button" value="+" @click="addHandle(3)"/>
			
		</div>
	</div>
</template>

<script>
	export default{
		/*data(){
			return{
				num :100
			}
		},*/
		computed:{
			num(){
				return this.$store.state.num
			}
		},
		methods:{
			minHandle(num){
				console.log(num);
				this.$store.commit('MinIncrement',{n:num,name:'guo'})
			},
			addHandle(num){
				console.log(num);
				this.$store.commit('AddIncrement',{n:num,name:'guo'})
			}
		}
	}
</script>

<style>
</style>