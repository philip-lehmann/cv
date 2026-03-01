import { Elysia } from 'elysia';
import { faroRoute } from './faro';
import { healthRoute } from './health';
import { pdfRoute } from './pdf';
import { videoRoute } from './video';

export const apiRoute = new Elysia({ prefix: '/api' }).use(healthRoute).use(pdfRoute).use(videoRoute).use(faroRoute);
