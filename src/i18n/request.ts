import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await import(`../../messages/${locale}.json`)
      .then((module) => module.default)
      .catch((error) => {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        return {};
      }),
  };
});
