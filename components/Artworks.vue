<template>
  <div class="container m-auto font-['lucida_sans'] lg:py-24 md:py-20 sm:py-16 py-12 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6" id="artworks">
    <div class="xl:px-32 lg:px-20 md:px-10 sm:px-6 px-4">
      <div class="flex flex-row justify-between items-center mb-10">
        <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:pb-4 pb-2">Artworks</h2>
        <NuxtLink class="text-base text-gray-600 italic cursor-pointer hover:underline" to="/artworks">Dive deeper to discover more</NuxtLink>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 sm:grid-cols-2 sm:gap-8 align-content-start">
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