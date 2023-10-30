import React, { type FC, memo, type PropsWithChildren } from 'react';
import { type LangType } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

interface TransProps {
  lang: LangType;
}

type ComponentProps = PropsWithChildren<TransProps>;

export const Trans: FC<ComponentProps> = memo(({ lang, children }) => {
  const locale = useLocale();
  if (locale !== lang) return null;
  return <>{children}</>;
});
Trans.displayName = 'Trans';
