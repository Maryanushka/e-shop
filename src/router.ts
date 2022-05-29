import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from './views/Home.vue'
import Product from './views/Product.vue'

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/:product',
		component: Product,
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
