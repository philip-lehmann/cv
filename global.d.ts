import type { AppData, Messages } from './src/shared/types';

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  interface Window {
    appData: AppData;
  }
}
