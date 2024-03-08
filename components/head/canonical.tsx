import type { FC } from 'react';
import { LangType } from '@cv/helpers/date';
import { useConfig } from '@cv/helpers/config_context';

interface CanonicalProps {
  locale: LangType;
  path: string;
}

export const Canonical: FC<CanonicalProps> = ({ locale, path }) => {
  const { siteUrl } = useConfig();

  return <link rel="canonical" href={`${siteUrl}/${locale}${path}`.replace(/\/$/, '')} />;
};
