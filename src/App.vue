<script setup lang="ts"></script>

<template>
  <nav>
    <router-link class="font-serif text-pink-500" to="/">Home</router-link>
    |
    <router-link class="font-serif" to="/about">About</router-link>
  </nav>
  <router-view></router-view>
</template>

