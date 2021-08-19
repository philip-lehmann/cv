import { parseISO, format } from 'date-fns'
import { de, enUS } from 'date-fns/locale'

export type LangType = 'en' | 'de'

type OptionsType = {
  locale?: LangType
}

const locales = Object.freeze({ en: enUS, de })

export const monthYear = (date: string, { locale = 'en' }: OptionsType = {}): string => {
  return format(parseISO(date), 'MMM yyyy', { locale: locales[locale] })
}
