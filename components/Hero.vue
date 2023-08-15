<template>
  <div class="pt-20 m-auto h-screen px-4 xl:px-16 lg:px-12 md:px-8 sm:px-6">
    <div class="bg-cover bg-top h-full w-full relative" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/450px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg');">
      <div class="bg-black bg-opacity-50 absolute inset-0 flex items-end">
        <div class="text-white m-6 sm:m-12 md:m-16 lg:m-20">
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 font-Aboreto">The Galleria.</h1>
          <div class="font-['lucida_sans'] font-light text-base sm:text-lg md:text-xl mb-16">
            <p>Featuring Various Collection of Artworks from Around The Globe.</p>
            <p>Based on Art Institute of Chicago API.</p>
            <a href="#artworks">
              <button class="px-12 py-2 text-base md:text-md mt-10 bg-white text-black hover:bg-red-600 hover:text-white  ransition duration-300 ease-in-out">Explore the collection</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="text-xs italic font-['lucida_sans'] font-gray-600 text-end">Cover: Liberty Leading the People</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
.font-Aboreto {
  font-family: 'Aboreto', cursive;
}
</style>