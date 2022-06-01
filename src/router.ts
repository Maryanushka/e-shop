import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from './views/Home.vue'
import Product from './views/Product.vue'
import EshopCart from './views/EshopCart.vue'

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/:product',
		component: Product,
	},
	{
		path: '/basket',
		component: EshopCart,
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
