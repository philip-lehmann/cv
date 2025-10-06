import { Elysia } from 'elysia';
import { serveApp } from '../App';

export const pageRoute = new Elysia()
  .get('/', ({ headers, redirect }) => {
    const [locale] = headers['Accept-Language']?.split('-') || ['en'];
    return redirect(`/${locale.toLowerCase()}`);
  })
  .get('/de', ({ path, query }) => {
    return serveApp('cv', { locale: 'de' }, { pathname: path, search: new URLSearchParams(query).toString() });
  })
  .get('/en', ({ path, query }) => {
    return serveApp('cv', { locale: 'en' }, { pathname: path, search: new URLSearchParams(query).toString() });
  });
