import React, { memo, FC } from 'react'
import { LangType } from 'helpers/date'
import { useConfig } from 'helpers/config_context'

interface CanonicalProps {
  locale: LangType
  defaultLocale: LangType
  path: string
}

const Canonical: FC<CanonicalProps> = memo(({ locale, defaultLocale, path }) => {
  const { siteUrl } = useConfig()
  if (path === '/' && locale === defaultLocale) {
    return (
      <>
        <link rel="canonical" href={`${siteUrl}/${defaultLocale}`} />
      </>
    )
  }
  return null
})

Canonical.displayName = 'Canonical'
export default Canonical
