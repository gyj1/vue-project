import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		num:100
	},
	mutations:{
		AddIncrement(state,n){
			
			state.num += n.n;
		},
		MinIncrement(state,n){
			state.num -= n.n;
		}
	}
	
})
export default store




