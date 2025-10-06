import { Elysia } from 'elysia';
import { env } from './helpers/env';
import { apiRoute } from './server/routes/api';
import { pageRoute } from './server/routes/page';
import { staticRoute } from './server/routes/static';

const app = new Elysia().use(staticRoute).use(apiRoute).use(pageRoute).listen(env.PORT);

console.log(`🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`);
