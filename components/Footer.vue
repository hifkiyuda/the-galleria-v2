<template>
  <footer class="m-auto w-full text-white bg-black rounded-tl-3xl rounded-tr-3xl pb-8 pt-8 px-8 xl:pt-16 lg:pt-12 xl:px-16 lg:px-12 font-['lucida_sans']">
    <div class="flex flex-row items-center mb-16">
      <p class="text-md sm:text-lg md:text-xl">The Galleria</p>
    </div>
    <div class="flex lg:flex-row flex-col items-start justify-between mb-32">
      <div class="text-xl md:text-2xl mb-10">
        <p>Featuring Various Collection</p>
        <p>of Artworks from Around The Globe</p>
      </div>
      <div class="mb-10 text-base">
        <a href="#" class="hover:underline">
          <p>Home</p>
        </a>
        <a href="#about" class="hover:underline">
          <p>About</p>
        </a>
        <NuxtLink to="/artworks" class="hover:underline">
          <p>Artworks</p>
        </NuxtLink>
      </div>
      <div>
        <div class="mb-6">
          <p class="text-gray-300">The Art Institute of Chicago®</p>
          <a class="text-sm italic text-gray-400 hover:underline" href="https://www.artic.edu/" target="_blank">https://www.artic.edu/</a>
        </div>
        <div>
          <p class="text-gray-300">Art Institute of Chicago API</p>
          <a class="text-sm italic text-gray-400 hover:underline" href="https://api.artic.edu/docs/" target="_blank">https://api.artic.edu/docs/</a>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center mb-2">
      <p class="text-xs text-gray-400">2023 - The Galleria |</p>
      <a href="https://github.com/hifkiyuda" target="_blank">
        <img class="h-4 ml-2" src="~/assets/images/hyp-logo-white.png" alt="The Galleria by hyp" />
      </a>
    </div>
    <p class="text-xs text-gray-400">Digital image courtesy of the Art Institute of Chicago.</p>
  </footer>
</template>