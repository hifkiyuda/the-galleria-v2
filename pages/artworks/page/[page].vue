<template>
  <div class="container lg:py-24 md:py-20 sm:py-16 py-12 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6 w-full m-auto">
    <ArtworksList :artworks="artworks" :page="page" />
    <Pagination :page="page" @change-page="changePage" />
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const page = ref(route.params.page || 1);
const artworks = ref([]);

const fetchData = async (pageNumber) => {
  if (pageNumber >= 1) {
    try {
      const { data: response } = await axios.get(`/api/artworks/${pageNumber}`);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
};

const changePage = async (newPage) => {
  if (newPage >= 1) {
    page.value = newPage;
    artworks.value = await fetchData(page.value);
    router.push({ path: `/artworks/page/${page.value}` });
  }
};

onMounted(async () => {
  artworks.value = await fetchData(page.value);
});
</script>