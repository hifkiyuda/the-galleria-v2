<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl my-8 lg:mb-12 lg:mt-4">The Collection of Artworks</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 px-4">
    <div v-for="artwork in artworks">
      <ArtworkCard :artwork="artwork" />
    </div>
  </div>
</template>

<script setup>
const { artworks } = defineProps(['artworks']);
</script>