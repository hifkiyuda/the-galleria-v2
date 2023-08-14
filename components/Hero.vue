<template>
  <div class="px-16 pt-20 m-auto h-screen">
    <div class="bg-cover bg-top h-full w-full relative" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/450px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg');">
      <div class="bg-black bg-opacity-50 absolute inset-0 flex items-end">
        <div class="text-white m-20">
          <h1 class="text-8xl mb-8 font-Aboreto">The Galleria.</h1>
          <div class="font-['lucida_sans'] font-light text-xl mb-16">
            <p>Featuring Various Collections of Artwork from Around The Globe.</p>
            <p>Based on Art Institute of Chicago API.</p>
            <a href="#artworks">
              <button class="px-12 py-2 text-md mt-10 border-2 bg-white text-black">Explore the collections</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
.font-Aboreto {
  font-family: 'Aboreto', cursive;
}
</style>