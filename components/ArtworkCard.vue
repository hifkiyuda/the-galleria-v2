<template>
  <div>
    <NuxtLink :to="`/artworks/${artwork.id}`" class="hover:opacity-80 transition duration-300 ease-in-out">
      <img :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`" />
      <h3 class="mt-4 mb-2 font-semibold text-xl">{{ artwork.title }}, {{ artwork.date_display }}</h3>
      <p>{{ artwork.artist_title }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { artwork } = defineProps(['artwork']);
</script>