<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProducts } from '../stores/products'

const products = useProducts()
const currentRouteId: string = useRoute().params.product.toString()
console.log(currentRouteId)

const product = products.getProduct('jordan_why_not')
</script>

<template>
	<div>{{ product }}</div>
</template>
