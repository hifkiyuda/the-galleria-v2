<template>
  <div class="container px-16 py-24 m-auto font-['lucida_sans']" id="artworks">
    <div class="px-32">
      <div class="flex flex-row justify-between items-center mb-10">
        <h2 class="text-4xl">Artworks</h2>
        <NuxtLink class="text-gray-600 italic underline cursor-pointer" to="/artworks">Dive deeper to discover more</NuxtLink>
      </div>
      <div class="grid grid-cols-3 gap-12 align-content-start">
        <div v-for="artwork in artworks" class="mb-8">
          <NuxtLink :to="`/artworks/${artwork.id}`" class="hover:opacity-80 transition duration-300 ease-in-out">
            <img :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`" />
            <h3 class="mt-4 mb-2 font-semibold text-xl">{{ artwork.title }}, {{ artwork.date_display }}</h3>
            <p>{{ artwork.artist_title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: response } = await useFetch('https://api.artic.edu/api/v1/artworks');
const artworks = toRaw(response.value.data);
</script>