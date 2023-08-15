<template>
  <header class="m-auto w-full fixed z-10 bg-white pt-4 px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6">
    <nav class="flex flex-row justify-between items-center font-['lucida_sans'] border-b pb-4">
      <NuxtLink class="cursor-pointer" to="/">
        <div class="flex flex-row items-center">
          <p class="text-md sm:text-lg md:text-xl">The Galleria</p>
        </div>
      </NuxtLink>
      <button class="text-md" @click="openMenu">Menu</button>
    </nav>
  </header>

  <div :class="{ 'hidden': !isMenuOpen }" class="flex flex-col w-screen p-4 sm:pl-8 sm:pt-4 sm:pr-4 sm:pb-8 sm:rounded-3xl bg-white fixed z-20 sm:top-4 sm:right-12 sm:w-96 font-[lucida_sans] shadow-xl">
    <div class="flex flex-row justify-end items-center">
      <button @click="closeMenu" class="rounded-full border-black border-2 p-2 hover:text-white hover:bg-black transition duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-width="2" d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="12;0"/></path></svg></button>
    </div>
    <nav class="flex flex-col text-2xl sm:text-3xl p-4">
      <NuxtLink class="mb-4 hover:underline transition duration-300 ease-in-out" to="/">Home</NuxtLink>
      <NuxtLink class="mb-4 hover:underline transition duration-300 ease-in-out" to="/artworks">Artworks</NuxtLink>
      <a class="mb-20 hover:underline transition duration-300 ease-in-out" href="https://www.artic.edu/" target="_blank">Art Institute of Chicago</a>
    </nav>
    <div class="flex flex-row items-center p-4">
      <p class="text-sm">The Galleria</p>
      <p class="text-sm mx-2">|</p>
      <img class="h-4" src="~/assets/images/hyp-logo-black.png" alt="The Galleria by hyp" />
    </div>
  </div>
  <div v-if="isMenuOpen" @click="closeMenu" class="fixed inset-0 bg-black opacity-50 z-10"></div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>