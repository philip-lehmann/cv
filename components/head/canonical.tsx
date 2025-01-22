import type { FC } from 'react';
import type { LangType } from '@cv/helpers/date';
interface CanonicalProps {
  locale: LangType;
  path: string;
}

export const Canonical: FC<CanonicalProps> = async ({ locale, path }) => {
  const response = await fetch('http://localhost:3000/api/config');
  const { siteUrl } = await response.json();

  return <link rel="canonical" href={`${siteUrl}/${locale}${path}`.replace(/\/$/, '')} />;
};
