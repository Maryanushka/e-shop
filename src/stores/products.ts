import { defineStore } from 'pinia'
import { Product } from '../interfaces'

export const useProducts = defineStore('products', {
	state: () => ({
		data: [] as Product[],
		item: {} as Product,
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
		async fetchProduct(productUid: string) {
			this.item = (await import('../assets/data.json')).default.filter((el) => el.uid === productUid)[0]
		},
	},
})
