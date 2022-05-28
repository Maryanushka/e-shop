<script setup lang="ts">
// import HelloWorld from '../components/HelloWorld.vue';
import { useCounterStore } from '../stores/products'

const store = useCounterStore()
console.log(store)
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
		<div class="w-full flex justify-between items-center">
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
		<div class="products-grid grid-cols-3 grid gap-4 mt-8">
			<article class="p-4 border-1 relative flex flex-col product rounded-lg shadow-light-900 hover:shadow-lg cursor-pointer transition-shadow">
				<h4 class="sub_title text-gray-400 w-full font-normal mb-2">High Speed Sneakers</h4>
				<div class="title text-dark-400 w-full font-bold text-xl">Jordan Why Not</div>
				<div class="image overflow-hidden rounded-lg my-5 h-96">
					<img class="w-full h-full object-cover object-center" src="../assets/images/shoes/Jordan Why Not/1dfab0ad-91ea-49fa-90a6-d9c0c2441649.webp" alt="" />
				</div>
				<div class="bottom">
					<div class="price w-1/2 flex flex-col">
						<span class="text-gray-400 mb-2">Price</span>
						<span class="price text-dark-800 font-bold text-2xl">$ 790</span>
					</div>
				</div>
			</article>
			<article class="p-4 border-1 relative flex flex-col product rounded-lg shadow-light-900 hover:shadow-lg cursor-pointer transition-shadow">
				<h4 class="sub_title text-gray-400 w-full font-normal mb-2">High Speed Sneakers</h4>
				<div class="title text-dark-400 w-full font-bold text-xl">LeBron 19</div>
				<div class="image overflow-hidden rounded-lg my-5 h-96">
					<img class="w-full h-full object-cover object-center" src="../assets/images/shoes/LeBron 19/c13adec0-4806-4540-b499-66952d851ad7.webp" alt="" />
				</div>
				<div class="bottom">
					<div class="price w-1/2 flex flex-col">
						<span class="text-gray-400 mb-2">Price</span>
						<span class="price text-dark-800 font-bold text-2xl">$ 790</span>
					</div>
				</div>
			</article>
			<article class="p-4 border-1 relative flex flex-col product rounded-lg shadow-light-900 hover:shadow-lg cursor-pointer transition-shadow">
				<h4 class="sub_title text-gray-400 w-full font-normal mb-2">High Speed Sneakers</h4>
				<div class="title text-dark-400 w-full font-bold text-xl">Nike Air Huarache</div>
				<div class="image overflow-hidden rounded-lg my-5 h-96">
					<img class="w-full h-full object-cover object-center" src="../assets/images/shoes/Nike Air Huarache/as.jpeg" alt="" />
				</div>
				<div class="bottom">
					<div class="price w-1/2 flex flex-col">
						<span class="text-gray-400 mb-2">Price</span>
						<span class="price text-dark-800 font-bold text-2xl">$ 790</span>
					</div>
				</div>
			</article>
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
