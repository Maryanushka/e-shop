<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProducts } from '../stores/products'

const currentRouteId: string = useRoute().params.product.toString()
const product = useProducts()
product.fetchProduct(currentRouteId)

// product.fetchProduct(currentRouteId)

// const product = products.getProduct(currentRouteId)
</script>

<template>
	<div>{{ product.item }}</div>
</template>
