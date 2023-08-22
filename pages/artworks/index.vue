<template>
  <div class="container lg:py-24 md:py-20 sm:py-16 py-12 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6 w-full m-auto">
    <ArtworksList :artworks="artworks" :page="page" />
    <div class="mt-24 text-end">
      <button class="italic hover:underline" @click="changePage(page - 1)" :disabled="page === 1">Previous Page</button>
      <span class="mx-2">| Page {{ page }} |</span>
      <button class="italic hover:underline" @click="changePage(page + 1)">Next Page</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const page = ref(1);
const artworks = ref([]);

const fetchData = async (pageNumber) => {
  try {
    const { data: response } = await axios.get(`/api/artworks/${pageNumber}`);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const changePage = async (newPage) => {
  if (newPage >= 1) {
    page.value = newPage;
    artworks.value = await fetchData(page.value);
  }
};

onMounted(async () => {
  artworks.value = await fetchData(page.value);
});
</script>



