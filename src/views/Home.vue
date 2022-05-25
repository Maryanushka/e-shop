<script setup lang="ts">
// import HelloWorld from '../components/HelloWorld.vue';
import { useCounterStore } from '../stores/products'

const store = useCounterStore()
console.log(store);

</script>

<template>
	<code>{{store}}</code>
  <!-- <HelloWorld msg="Hello Vue 3 + Vuex + Vue Router + TypeScript + Vite" /> -->
</template>
