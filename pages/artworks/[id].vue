<template>
  <div class="container lg:py-24 md:py-20 sm:py-16 py-12 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6 w-full m-auto">
    <ArtworkDetail :artwork="artwork" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = `https://api.artic.edu/api/v1/artworks/${id}`;

const { data: response } = await useFetch(url, { key: id });
const artwork = toRaw(response.value.data);
</script>