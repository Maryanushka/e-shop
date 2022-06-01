<script setup lang="ts">
import { useProducts } from '../stores/products'
import { useCart } from '../stores/cart'

const cart = useCart()
const products = useProducts()
products.fetchProducts()
</script>

<template>
	<!-- filter -->
	<aside class="filters w-[25%] h-[90vh] flex flex-col justify-start border-r-1 border-solid">
		<div class="drop-down">
			<h4 class="drop-down__title flex items-center justify-between py-4 pl-10 pr-4 border-b-1">
				<span class="font-medium">Gender</span>
				<button class="arrow text-dark-50 p-2 rounded-full hover:bg-indigo-100 inline-flex">
					<svg class="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
				</button>
			</h4>
			<ul class="drop-down__list">
				<ul>
					<li class="py-3 pl-10 pr-4">
						<label for="male" class="flex items-center relative checkbox cursor-pointer">
							<input id="male" type="checkbox" value="male" class="opacity-0 z-10 w-5 h-5 w-full h-full absolute cursor-pointer" />
							<div class="box w-5 h-5 rounded border-2 border-dark-100 cursor-pointer z-0 left-0"></div>
							<span class="w-[calc(100%-4rem)] ml-3">Male</span>
						</label>
					</li>
					<li class="py-3 pl-10 pr-4">
						<label for="female" class="flex items-center relative checkbox cursor-pointer">
							<input id="female" type="checkbox" value="female" class="opacity-0 z-10 w-5 h-5 w-full h-full absolute cursor-pointer" />
							<div class="box w-5 h-5 rounded border-2 border-dark-100 cursor-pointer z-0 left-0"></div>
							<span class="w-[calc(100%-4rem)] ml-3">Female</span>
						</label>
					</li>
				</ul>
			</ul>
		</div>
	</aside>
	<!-- filter -->

	<main class="w-[75%] h-[90vh] p-4">
		<!-- title -->
		<div class="w-full flex justify-between items-center flex-wrap">
			<h2 class="font-bold text-xl">New Arrivals</h2>
			<div class="drop-down w-36">
				<div class="drop-down__title flex items-center justify-between">
					<h4 class="font-medium">Sort by price</h4>
					<button class="arrow text-dark-50 p-2 rounded-full hover:bg-indigo-100 inline-flex">
						<svg class="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
					</button>
				</div>
			</div>
		</div>
		<!-- title -->

		<!-- grid -->
		<div class="products-grid grid-cols-3 md:grid-cols-2 grid gap-4 mt-8">
			<!-- product -->
			<article v-for="product in products.data" :key="product.id" class="p-4 border-1 relative flex flex-col product rounded-lg">
				<h4 class="sub_title text-gray-400 w-full font-normal mb-2">{{ product.subTitle }}</h4>
				<router-link class="title text-dark-400 w-full font-bold text-xl hover:text-indigo-800" :to="`/${product.uid}`">{{ product.title }}</router-link>
				<div class="image overflow-hidden rounded-lg my-5 h-96">
					<img class="w-full h-full object-cover object-center" :src="`src/assets/images/shoes/${product.thumbnail}`" alt="" />
				</div>
				<div class="bottom flex justify-between items-end">
					<div class="price w-1/2 flex flex-col">
						<span class="text-gray-400 mb-2">Price</span>
						<span class="price text-dark-800 font-bold text-2xl">$ {{ product.price }}</span>
					</div>
					<button class="bg-dark-800 border-dark-600 text-light-100 px-4 py-2 rounded-md inline-flex hover:bg-indigo-800 hover:shadow-indigo-500 hover:border-indigo-800 active:bg-indigo-500 border-2 active:border-indigo-600 shadow-lg h-[fit-content]" @click="cart.data.push(product)">
						<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
							<g transform="translate(128 128) scale(0.72 0.72)" style="">
								<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
									<path class="fill-light-100" d="M 71.796 23.427 H 61.343 v -10.49 C 61.343 5.804 55.699 0 48.762 0 h -7.523 c -6.937 0 -12.581 5.804 -12.581 12.937 v 10.49 H 18.204 c -1.933 0 -3.5 1.567 -3.5 3.5 v 47.037 C 14.704 82.807 21.897 90 30.74 90 h 28.52 c 8.843 0 16.036 -7.193 16.036 -16.036 V 26.927 C 75.296 24.994 73.729 23.427 71.796 23.427 z M 35.657 12.937 C 35.657 9.664 38.161 7 41.238 7 h 7.523 c 3.077 0 5.581 2.664 5.581 5.937 v 10.49 H 35.657 V 12.937 z M 68.296 73.964 c 0 4.982 -4.054 9.036 -9.036 9.036 H 30.74 c -4.983 0 -9.037 -4.054 -9.037 -9.036 V 30.427 h 6.954 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 18.686 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 6.953 V 73.964 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
								</g>
							</g>
						</svg>
						<span> - ${{ product.price }}</span>
					</button>
				</div>
			</article>
			<!-- product -->
		</div>
		<!-- grid -->
	</main>
</template>

<style lang="postcss" scoped>
.checkbox {
	.box {
		transition: border 0.1s ease-in;
	}
	input:checked ~ .box {
		border-width: 7px;
		border-color: theme('colors.dark.700');
	}
}

.products-grid {
	.product {
		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 2px;
			height: 15px;
			left: 0;
			top: 1.5rem;
		}
	}
}
</style>
