<script setup lang="ts">
import { useCart } from '../stores/cart'

const cart = useCart()
console.log(cart)
</script>

<template>
	<main class="cart flex flex-col w-2/3 min-h-[90vh]">
		<template v-if="cart.data.length > 0">
			<!-- item -->
			<div v-for="item in cart.data" :key="item.id" class="item w-full flex p-3 border-1 border-t-0">
				<div class="image w-46 h-46 overflow-hidden">
					<img class="object-center object-cover w-full h-full" :src="`src/assets/images/shoes/${item.thumbnail}`" alt="" />
				</div>
				<div class="content px-3 flex-1 flex flex-wrap">
					<h3 class="title text-xl font-bold mb-3 h-[fit-content] w-full">{{ item.title }}</h3>
					<!-- <p class="description my-5">{{ item.description }}</p> -->
					<div class="buttons flex items-center self-end justify-self-end ml-auto">
						<div class="input flex items-center">
							<label for="number" class="mr-3">Number</label>
							<input id="number" type="number" class="border-1 border-gray-300 w-12 rounded p-1" placeholder="1" value="1" />
						</div>
						<button class="rounded p-[0.5rem] ml-4 border-1 border-rose-100 text-rose-600 hover:bg-rose-600 hover:text-rose-100">
							<svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
						</button>
					</div>
				</div>
			</div>
			<!-- item -->
		</template>
		<template v-else>
			<div class="empty p-3">
				<h1>Your cart is empty :(</h1>
			</div>
		</template>
	</main>
	<aside class="w-1/3 p-3 border-b-1 h-auto border-solid border-b-gray-300 h-[fit-content]">
		<h3 class="text-xl font-semibold">Summary</h3>
		<div class="receipt mt-6 w-full flex flex-col">
			<div class="item flex w-full justify-between"><span class="title">Jordan Why Not</span> <span class="number">1 - 130$</span></div>
		</div>
		<div class="total flex w-full my-4 justify-between">
			<span class="title font-semibold">Total</span>
			<span class="total_price font-semibold"> 130$</span>
		</div>
	</aside>
</template>
