<script setup lang="ts">
// import HelloWorld from '../components/HelloWorld.vue';
import { useCounterStore } from '../stores/products'

const store = useCounterStore()
console.log(store)
</script>

<template>
	<aside class="filters w-[25%] h-[90vh] flex flex-col justify-start border-r-1 border-solid">
		<div class="drop-down">
			<h4 class="drop-down__title flex items-center justify-between py-3 pl-10 pr-4 border-b-1">
				<span class="font-medium">Sex</span>
				<button class="arrow text-dark-50 p-3 rounded-full hover:bg-light-150 inline-flex">
					<svg class="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
				</button>
			</h4>
			<ul class="drop-down__list">
				<ul>
					<li class="py-3 pl-10 pr-4">Male</li>
					<li class="py-3 pl-10 pr-4">Female</li>
				</ul>
			</ul>
		</div>
	</aside>
	<main class="w-[75%] h-[90vh]">
		<h1>home</h1>
	</main>
</template>
