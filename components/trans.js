import { memo } from 'react'
import { useRouter } from 'next/router'

const Trans = memo(({ lang, children }) => {
  const { locale } = useRouter()
  if (locale != lang) return null
  return children
})
Trans.displayName = 'Trans'

export default Trans
