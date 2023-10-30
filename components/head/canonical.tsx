import React, { type FC } from 'react';
import { LangType } from '@cv/helpers/date';
import { useConfig } from '@cv/helpers/config_context';

interface CanonicalProps {
  locale: LangType;
  defaultLocale: LangType;
  path: string;
}

export const Canonical: FC<CanonicalProps> = ({ locale, defaultLocale, path }) => {
  const { siteUrl } = useConfig();
  if (path === '/' && locale === defaultLocale) {
    return <link rel="canonical" href={`${siteUrl}/${defaultLocale}`} />;
  }
  return null;
};
