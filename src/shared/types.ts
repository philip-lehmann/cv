import type en from '../messages/en.json';

export type Messages = typeof en;

export type DotObjectKeys<T extends object> = {
  [K in keyof T & string]: T[K] extends object ? K | `${K}.${DotObjectKeys<T[K]>}` : never;
}[keyof T & string];

export type MessageNamespaces = DotObjectKeys<Messages>;

export type AppData = {
  locale: 'de' | 'en';
  googleAnalyticsKey: string | undefined;
  env: string;
  siteUrl: string;
  faroUrl: string | undefined;
  faroApiKey: string | undefined;
};
