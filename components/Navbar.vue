<template>
  <header class="container m-auto w-screen px-16 pt-4 fixed z-10 bg-white">
    <nav class="flex flex-row justify-between items-center font-['lucida_sans'] border-b pb-4">
      <NuxtLink class="cursor-pointer" to="/">
        <div class="flex flex-row items-center">
          <p class="text-xl">The Galleria</p>
        </div>
      </NuxtLink>
      <button @click="openMenu">Menu</button>
    </nav>
  </header>

  <div :class="{ 'hidden': !isMenuOpen }" class="pl-8 pt-4 pr-4 pb-8 rounded-3xl bg-white fixed z-20 top-2 right-12 w-96 font-[lucida_sans] shadow-xl">
    <div class="flex flex-row justify-end items-center">
      <button @click="closeMenu" class="rounded-full border-black border-2 p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-width="2" d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="12;0"/></path></svg></button>
    </div>
    <nav class="flex flex-col text-3xl pt-4">
      <NuxtLink class="mb-4 hover:underline transition duration-300 ease-in-out" to="/">Home</NuxtLink>
      <NuxtLink class="mb-20 hover:underline transition duration-300 ease-in-out" to="/artworks">Artworks</NuxtLink>
    </nav>
    <div class="flex flex-row items-center">
      <img class="h-4" src="~/assets/images/hyp-logo-black.png" alt="The Galleria by hyp" />
      <p class="text-sm mx-2">|</p>
      <p class="text-sm">The Galleria</p>
    </div>
  </div>
  <div v-if="isMenuOpen" @click="closeMenu" class="fixed inset-0 bg-black opacity-50 z-10"></div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>