<template>
  <div class="mt-24 text-end">
    <button class="italic hover:underline" @click="changePage(page - 1)" :disabled="page === 1">Previous Page</button>
    <span class="mx-2">| Page {{ page }} |</span>
    <button class="italic hover:underline" @click="changePage(page + 1)">Next Page</button>
  </div>
</template>

<script setup>
const { page } = defineProps(['page']);
const emit = defineEmits();

const changePage = (newPage) => {
  emit('change-page', newPage);
};
</script>