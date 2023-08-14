<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-2 font-semibold text-3xl">{{ artwork.title }}, {{ artwork.date_display }}</h1>
      <p class="text-xl">{{ artwork.artist_title }}</p>
    </div>
    <div class="font-['lucida_sans'] flex flex-row">
      <img class="h-96 mr-24" :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`" />
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
  </div>
</template>

<script setup>
const { artwork } = defineProps(['artwork']);
</script>