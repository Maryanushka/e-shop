import { defineStore } from 'pinia'
import { Product } from '../interfaces'

export const useCart = defineStore('cart', {
	state: () => ({
		data: [] as Product[],
	}),
	getters: {
		// total price
	},
	actions: {
		// push poduct
		// remove from product
		// reset basket
	},
})
