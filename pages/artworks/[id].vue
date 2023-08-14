<template>
  <div class="px-16 py-24 m-auto">
    <div>
      <ArtworkDetail :artwork="artwork" />
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = 'https://api.artic.edu/api/v1/artworks/' + id;

const { data: response } = await useFetch(url, { key: id });
const artwork = toRaw(response.value.data);
</script>