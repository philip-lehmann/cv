import { format, parseISO } from 'date-fns';
import { de, enUS } from 'date-fns/locale';

export const LangType = ['en', 'de'] as const;
export type LangType = (typeof LangType)[number];
export type LangEnum = { [K in LangType]: K };
export const LangEnum = Object.freeze(
  LangType.reduce(
    (acc, lang) => {
      acc[lang] = lang;
      return acc;
    },
    {} as Record<LangType, LangType>,
  ),
) as LangEnum;
export const isLocale = (locale: string): locale is LangType => LangType.includes(locale as LangType);

type OptionsType = {
  locale?: LangType;
};

const locales = Object.freeze({ en: enUS, de });

export const monthYear = (date: string, { locale = 'en' }: OptionsType = {}): string => {
  return format(parseISO(date), 'MMM yyyy', { locale: locales[locale] });
};
