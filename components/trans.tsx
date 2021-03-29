import { memo, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { LangType } from 'helpers/date'

interface TransProps {
  lang: LangType
}

type ComponentProps = PropsWithChildren<TransProps>

const Trans = ({ lang, children }) => {
  const { locale } = useRouter()
  if (locale != lang) return null
  return children
}
Trans.displayName = 'Trans'

export default memo<ComponentProps>(Trans)
