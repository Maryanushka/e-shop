<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProducts } from '../stores/products'

const currentRouteId: string = useRoute().params.product.toString()
const product = useProducts()
product.fetchProduct(currentRouteId)
</script>

<template>
	<main class="flex px-10 h-[90vh]">
		<div class="w-2/5">
			<h1 class="font-semibold text-5xl p-5 h-[15%] inline-flex">{{ product.item.title }}</h1>
			<div class="image h-[85%]">
				<img class="w-full h-full object-cover object-center" :src="`src/assets/images/shoes/${product.item.thumbnail}`" alt="" />
			</div>
		</div>
		<div class="description w-2/5 px-5 h-[100%] pt-[7%]">
			<h3 class="font-semibold text-lg mb-3">Description</h3>
			<p>{{ product.item.description }}</p>
			<div class="buttons mt-5">
				<button class="bg-dark-800 border-dark-600 text-light-100 px-8 py-3 rounded-md inline-flex hover:bg-indigo-800 hover:shadow-indigo-500 hover:border-indigo-800 active:bg-indigo-500 border-2 active:border-indigo-600 shadow-lg">
					<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
						<g transform="translate(128 128) scale(0.72 0.72)" style="">
							<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
								<path class="fill-light-100" d="M 71.796 23.427 H 61.343 v -10.49 C 61.343 5.804 55.699 0 48.762 0 h -7.523 c -6.937 0 -12.581 5.804 -12.581 12.937 v 10.49 H 18.204 c -1.933 0 -3.5 1.567 -3.5 3.5 v 47.037 C 14.704 82.807 21.897 90 30.74 90 h 28.52 c 8.843 0 16.036 -7.193 16.036 -16.036 V 26.927 C 75.296 24.994 73.729 23.427 71.796 23.427 z M 35.657 12.937 C 35.657 9.664 38.161 7 41.238 7 h 7.523 c 3.077 0 5.581 2.664 5.581 5.937 v 10.49 H 35.657 V 12.937 z M 68.296 73.964 c 0 4.982 -4.054 9.036 -9.036 9.036 H 30.74 c -4.983 0 -9.037 -4.054 -9.037 -9.036 V 30.427 h 6.954 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 18.686 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 6.953 V 73.964 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
							</g>
						</g>
					</svg>
					<span>${{ product.item.price }} - Add to cart</span>
				</button>
			</div>
		</div>
		<div class="slider w-1/5 flex flex-col h-full overflow-x-auto">
			<div v-for="sliderImage in product.item.gallery" :key="sliderImage" class="image w-full h-[30vh] relative cursor-pointer">
				<img class="w-full h-full object-cover object-center" :src="`src/assets/images/shoes/${sliderImage}`" alt="" />
			</div>
		</div>
	</main>
</template>
<style lang="postcss">
.slider {
	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		transition: height 0.3s linear;
	}
	&::-webkit-scrollbar-button {
		width: 0px;
		height: 0px;
	}
	&::-webkit-scrollbar-thumb {
		background: theme('colors.indigo.600');
		border: 5px none theme('colors.indigo.600');
		border-radius: 50px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: theme('colors.indigo.400');
	}
	&::-webkit-scrollbar-thumb:active {
		background: theme('colors.indigo.600');
	}
	&::-webkit-scrollbar-track {
		background: theme('colors.light.600');
		border: 5px none theme('colors.light.600');
		border-radius: 50px;
	}
	&::-webkit-scrollbar-track:hover {
		background: theme('colors.light.900');
	}
	&::-webkit-scrollbar-track:active {
		background: theme('colors.light.900');
	}
	&::-webkit-scrollbar-corner {
		background: theme('colors.light.900');
	}
	.image {
		&:hover {
			&::before {
				content: '';
				height: 100%;
				width: 2px;
				background-color: theme('colors.indigo.600');
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
}
</style>
