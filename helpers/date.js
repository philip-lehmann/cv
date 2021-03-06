import { parseISO, format } from 'date-fns'

export const monthYear = (date) => {
  return format(parseISO(date), 'MMM yy')
}
