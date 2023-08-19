export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const url = `https://api.artic.edu/api/v1/artworks/${id}`;

  const { data } = await $fetch(url);

  return data;
});