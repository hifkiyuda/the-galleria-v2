<template>
  <div class="font-['lucida_sans']">
    <div class="mb-8">
      <h1 class="mb-2 font-semibold text-3xl">{{ artwork.title }}, {{ artwork.date_display }}</h1>
      <p class="text-xl">{{ artwork.artist_title }}</p>
    </div>
    
    <div class="flex lg:flex-row flex-col">
      <img class="h-96 mr-24" :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`" :alt="artwork.title" />
      <div>
        <div class="flex flex-row mb-4">
          <p>Title:</p>
          <p class="font-semibold ml-4"> {{ artwork.title }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Artist:</p>
          <p class="font-semibold ml-4"> {{ artwork.artist_title }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Place:</p>
          <p class="font-semibold ml-4"> {{ artwork.place_of_origin }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Date:</p>
          <p class="font-semibold ml-4"> {{ artwork.date_display }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Artwork Type:</p>
          <p class="font-semibold ml-4"> {{ artwork.artwork_type_title }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Dimensions:</p>
          <p class="font-semibold ml-4"> {{ artwork.dimensions }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Medium:</p>
          <p class="font-semibold ml-4"> {{ artwork.medium_display }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Credit line:</p>
          <p class="font-semibold ml-4"> {{ artwork.credit_line }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>Reference Number:</p>
          <p class="font-semibold ml-4"> {{ artwork.main_reference_number }}</p>
        </div>
        <div class="flex flex-row mb-4">
          <p>IIIF Manifest:</p>
          <p class="font-semibold ml-4"> {{ `${artwork.api_link}/manifest.json` }}</p>
        </div>
      </div>
    </div>

    <div>
      <div class="mt-8 border-b pb-4">
        <div class="flex flex-row justify-between items-center mb-4">
          <h2 class="text-2xl">Publication History</h2>
          <button class="text-4xl" @click="togglePublication">
            <svg v-if="isPublicationOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h13v1H5Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5Z"/></svg>
          </button>
        </div>
        <ul v-if="publication.length" class="list-disc px-4 text-base" :class="{ 'hidden': !isPublicationOpen }">
          <li v-for="p in publication" class="mb-2">{{ p }}</li>
        </ul>
        <p v-else class="text-gray-600 italic mt-4" :class="{ 'hidden': !isPublicationOpen }">Object information is a work in progress and may be updated as new research findings emerge.</p>
      </div>
      <div class="mt-8 border-b pb-4">
        <div class="flex flex-row justify-between items-center mb-4">
          <h2 class="text-2xl">Exhibition History</h2>
          <button class="text-4xl" @click="toggleExhibition">
            <svg v-if="isExhibitionOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h13v1H5Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5Z"/></svg>
          </button>
        </div>
        <ul v-if="exhibition.length" class="list-disc px-4 text-base" :class="{ 'hidden': !isExhibitionOpen }">
          <li v-for="e in exhibition" class="mb-2">{{ e }}</li>
        </ul>
        <p v-else class="text-gray-600 italic mt-4" :class="{ 'hidden': !isExhibitionOpen }">Object information is a work in progress and may be updated as new research findings emerge.</p>
      </div>
      <div class="mt-8 border-b pb-4">
        <div class="flex flex-row justify-between items-center mb-4">
          <h2 class="text-2xl">Provenance</h2>
          <button class="text-4xl" @click="toggleProvenance">
            <svg v-if="isProvenanceOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h13v1H5Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5Z"/></svg>
          </button>
        </div>
        <p v-if="artwork.provenance_text" :class="{ 'hidden': !isProvenanceOpen }" class="mb-2">{{ artwork.provenance_text }}</p>
        <p v-else class="text-gray-600 italic mt-4" :class="{ 'hidden': !isProvenanceOpen }">Object information is a work in progress and may be updated as new research findings emerge.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const { artwork } = defineProps(['artwork']);

let publication = [];
let exhibition = [];

if (artwork.publication_history) {
  publication = artwork.publication_history.split('\n\n');
}

if (artwork.exhibition_history) {
  exhibition = artwork.exhibition_history.split('\n\n');
}

const isPublicationOpen = ref(false);
const isExhibitionOpen = ref(false);
const isProvenanceOpen = ref(false);

const togglePublication = () => {
  isPublicationOpen.value = !isPublicationOpen.value;
};
const toggleExhibition = () => {
  isExhibitionOpen.value = !isExhibitionOpen.value;
};
const toggleProvenance = () => {
  isProvenanceOpen.value = !isProvenanceOpen.value;
};
</script>