export default defineEventHandler((event) => {

  const { page } = useQuery(event);

  return {
    message: `Hello, ${page}`,
  };
});