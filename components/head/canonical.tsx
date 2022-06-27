import React, { memo, FC } from 'react'
import getConfig from 'next/config'
import { LangType } from 'helpers/date'
import { useRouter } from 'next/router'
const {
  serverRuntimeConfig: { siteUrl, defaultLocale }
} = getConfig()

const Canonical: FC<{ locale: LangType; path: string }> = memo(({ locale, path }) => {
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
