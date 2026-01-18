import { Elysia } from 'elysia';
import { serveApp } from '../App';

export const pageRoute = new Elysia()
  .get('/', ({ headers, redirect }) => {
    const supportedLocales = ['en', 'de'];
    const [locale] = headers['accept-language']?.split('-') || ['en'];
    const normalizedLocale = locale.toLowerCase();
    const targetLocale = supportedLocales.includes(normalizedLocale) ? normalizedLocale : 'en';
    return redirect(`/${targetLocale}`);
  })
  .get('/de', ({ path, query }) => {
    return serveApp('cv', { locale: 'de' }, { pathname: path, search: new URLSearchParams(query).toString() });
  })
  .get('/en', ({ path, query }) => {
    return serveApp('cv', { locale: 'en' }, { pathname: path, search: new URLSearchParams(query).toString() });
  });
