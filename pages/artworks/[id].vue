<template>
  <div class="container lg:py-24 py-20 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6 w-full m-auto">
    <ArtworkDetail :artwork="artwork" />
  </div>
</template>

<script setup>
import axios from 'axios';

const { id } = useRoute().params;
const url = `/api/artwork/${id}`;

const { data: artwork } = await axios.get(url, { key: id });
</script>