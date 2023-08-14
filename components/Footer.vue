<template>
  <footer class="container m-auto text-white bg-black rounded-tl-3xl rounded-tr-3xl px-16 pt-16 pb-8 font-['lucida_sans']">
    <div class="flex flex-row items-center mb-16">
      <p class="text-xl">The Galleria</p>
    </div>
    <div class="flex flex-row items-start justify-between mb-32">
      <div class="text-2xl">
        <p>Featuring Various Collection</p>
        <p>of Artworks from Around The Globe</p>
      </div>
      <div>
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
          <a class="text-sm italic text-gray-400" href="https://www.artic.edu/" target="_blank">https://www.artic.edu/</a>
        </div>
        <div>
          <p class="text-gray-300">Art Institute of Chicago API</p>
          <a class="text-sm italic text-gray-400" href="https://api.artic.edu/docs/" target="_blank">https://api.artic.edu/docs/</a>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center mb-2">
      <p class="text-xs text-gray-400">2023 - The Galleria |</p>
      <img class="h-4 ml-2" src="~/assets/images/hyp-logo-white.png" alt="The Galleria by hyp" />
    </div>
    <p class="text-xs text-gray-400">Digital image courtesy of the Art Institute of Chicago.</p>
  </footer>
</template>