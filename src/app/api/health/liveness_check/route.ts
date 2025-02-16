export const GET = () => {
  return new Response('liveness_check', {
    status: 200,
  });
};
