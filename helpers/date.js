import { parseISO, format } from 'date-fns'
import { en, de } from 'date-fns/locale'

const locales = Object.freeze({ en, de })

export const monthYear = (date, { locale = 'en' } = {}) => {
  return format(parseISO(date), 'MMM yyyy', { locale: locales[locale] })
}
