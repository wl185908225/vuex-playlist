import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		products: [
			{
				name: '马云', price: 200
			},
			{
				name: '马化腾', price: 140
			},
			{
				name: '马冬梅', price: 20
			},
			{
				name: '马蓉', price: 2
			}
		]
	},
	getters: {
		saleProducts: (state) => {
			var saleProducts = state.products.map((product)=>{
				return {
					name: '**' + product.name + '**',
					price: product.price
				};
			});
			return saleProducts;
		}
	},
	mutations: {
		reducePrice: (state, price) => {
			console.log(price);
			state.products.forEach((product) => {
				product.price -= price;
			});
		}
	},
	actions: {
		reducePrice: (context, price) => {
			setTimeout(function() {
				context.commit('reducePrice', price);
			}, 2000);
		}
	}
})