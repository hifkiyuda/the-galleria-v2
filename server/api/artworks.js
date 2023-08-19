export default defineEventHandler(async () => {

  const { data } = await $fetch('https://api.artic.edu/api/v1/artworks');
  
  return data;
});