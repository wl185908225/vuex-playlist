<template>
	<div id="product-list-one">
		<h2>product-list-one</h2>
		<ul>
			<li v-for="product in saleProducts">
				<span class="name">{{product.name}}</span>
				<span class="price">${{product.price}}</span>
			</li>
		</ul>
		<button @click="reducePrice(Math.random())">商品降价</button>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'Vuex'
	export default {
		computed: {
			products() {
				return this.$store.state.products;
			},
// 			saleProducts() {
// 				return this.$store.getters.saleProducts;
// 			}
			...mapGetters([
				'saleProducts'
			])
		},
		methods: {
// 			reducePrice() {
// 				//commit调用的是mutations中方法
// 				//this.$store.commit('reducePrice', Math.random());
// 				
// 				//dispatch调用的是actions中方法
// 				this.$store.dispatch('reducePrice', );
// 			}
			...mapActions([
				'reducePrice'
			])
		}
	}
</script>

<style scoped="scoped">
	#product-list-one {
		background: #FFF8B1;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
		margin-bottom: 30px;
		padding: 10px 20px;
	}
	#product-list-one ul {
		padding: 0;
	}
	#product-list-one li {
		display: inline-block;
		margin-right: 10px;
		margin-top: 10px;
		padding: 20px;
		background: rgba(255, 255, 255, .7);
	}
	.price {
		font-weight: bold;
		color: #860CE8;
	}
</style>

