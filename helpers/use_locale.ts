import { useRouter } from 'next/router';
import { LangType } from './date';

const locales: Array<LangType> = ['de', 'en'];
const isLocale = (locale: string | undefined): locale is LangType => {
  if (typeof locale !== 'string') return false;
  return (locales as string[]).includes(locale);
};

export const useLocale = (): LangType => {
  const { locale } = useRouter();

  return isLocale(locale) ? locale : locales[0];
};
