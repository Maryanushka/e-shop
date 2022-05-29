import { defineStore } from 'pinia'
import { Product } from '../interfaces'

export type storeProducts = {
	products: Product[]
}

export const useProducts = defineStore('products', {
	state: () => ({
		data: [] as Product[],
	}),
	getters: {
		getProduct: (state) => {
			return (productUid: string) => state.data.filter((el) => el.uid === productUid)
		},
	},
	actions: {
		async fetchProducts() {
			this.data = (await import('../assets/data.json')).default
		},
	},
})
