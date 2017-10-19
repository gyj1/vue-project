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
		data(){
			return{
				num :100
			}
		},
		/*computed:{
			
		}*/
		methods:{
			minHandle(){
				this.num -=6;
				//this.$store.commit('MinIncrement,num')
			},
			addHandle(){
				this.num +=6;
				//this.$store.commit('AddIncrement,num')
			}
		}
	}
</script>

<style>
</style>