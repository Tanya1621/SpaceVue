<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import QuoteArea from './components/QuoteArea.vue'
import AppHeader from "@/components/AppHeader.vue";
import SpaceGallery from "@/components/Gallery.vue";
import PopupGalaxy from "@/components/PopupGalaxy.vue";
</script>

<template>
  <AppHeader />
  <QuoteArea />
  <SpaceGallery />
<!--  <PopupGalaxy />-->
<!--  <RouterView />-->
</template>

<style scoped>

</style>
