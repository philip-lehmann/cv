import type { FC } from 'react';
import type { LangType } from '../../../helpers/date';

interface CanonicalProps {
  locale: LangType;
  path: string;
  url: string;
}

export const Canonical: FC<CanonicalProps> = ({ locale, path, url }) => {
  return <link rel="canonical" href={`${url}/${locale}${path}`.replace(/\/$/, '')} />;
};
