import { Elysia } from 'elysia';

export const healthRoute = new Elysia({ prefix: '/health' })
  .get('/liveness_check', () => new Response('OK', { status: 200 }))
  .get('/readiness_check', () => new Response('OK', { status: 200 }));
