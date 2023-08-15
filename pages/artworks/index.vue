<template>
  <div class="container lg:py-24 md:py-20 sm:py-16 py-12 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6 w-full m-auto font-['lucida_sans']">
    <h1 class="text-2xl md:text-3xl lg:text-4xl my-8 lg:mb-12 lg:mt-4">The Collection of Artworks</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
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
const artworks = ref([]);

const fetchData = async () => {
  try {
    const { data: response } = await useFetch(`https://api.artic.edu/api/v1/artworks?page=${page.value}`);
    artworks.value = toRaw(response.value.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const changePage = (newPage) => {
  if (newPage >= 1) {
    page.value = newPage;
    fetchData();
  }
};
</script>



