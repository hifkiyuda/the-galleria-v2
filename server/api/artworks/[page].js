export default defineEventHandler(async (event) => {
  const { page } = event.context.params;
  const url = `https://api.artic.edu/api/v1/artworks?page=${page}`;

  const { data } = await $fetch(url);

  return data;
});