<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/QuoteArea.vue'
import AppHeader from "@/components/AppHeader.vue";
import SpaceGallery from "@/components/Gallery.vue";
</script>

<template>
  <AppHeader />
  <HelloWorld msg="You did it!" />
  <SpaceGallery />
<!--  <RouterView />-->
</template>

<style scoped>

</style>
