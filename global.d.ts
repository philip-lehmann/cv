import type en from './messages/en.json';

type Messages = typeof en;

type AppData = {
  locale: 'de' | 'en';
  googleAnalyticsKey: string | undefined;
  env: string;
  siteUrl: string;
  faroUrl: string | undefined;
  faroApiKey: string | undefined;
};

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  interface Window {
    appData: AppData;
  }
}
