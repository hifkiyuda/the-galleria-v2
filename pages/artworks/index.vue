<template>
  <div class="px-16 py-24 m-auto font-['lucida_sans']">
    <div class="mb-12 mt-4">
      <h1 class="text-4xl">The Collection of Artworks</h1>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="artwork in artworks">
        <ArtworkCard :artwork="artwork" />
      </div>
    </div>
    <div class="mt-24 text-end">
      <button class="italic underline" @click="changePage(page - 1)" :disabled="page === 1">Previous Page</button>
      <span class="mx-2">| Page {{ page }} |</span>
      <button class="italic underline" @click="changePage(page + 1)">Next Page</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const page = ref(1);
const artworks = ref([]); // Initialize artworks as a reactive array

const fetchData = async () => {
  try {
    const { data: response } = await useFetch(`https://api.artic.edu/api/v1/artworks?page=${page.value}`);
    artworks.value = toRaw(response.value.data); // Update artworks with fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const changePage = (newPage) => {
  if (newPage >= 1) {
    page.value = newPage;
    console.log(newPage);
    console.log(artworks);
    fetchData();
  }
};

// const { data: response } = await useFetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
// const artworks = toRaw(response.value.data);
// console.log(artworks);
</script>



