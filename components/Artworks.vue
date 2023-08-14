<template>
  <div class="container px-16 py-24 m-auto font-['lucida_sans']" id="artworks">
    <div class="px-32">
      <div class="flex flex-row justify-between items-center mb-10">
        <h2 class="text-4xl">Artworks</h2>
        <NuxtLink class="text-gray-600 italic cursor-pointer hover:underline" to="/artworks">Dive deeper to discover more</NuxtLink>
      </div>
      <div class="grid grid-cols-3 gap-12 align-content-start">
        <div v-for="artwork in artworks" class="mb-8">
          <ArtworkCard :artwork="artwork" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: response } = await useFetch('https://api.artic.edu/api/v1/artworks');
const artworks = toRaw(response.value.data);
</script>