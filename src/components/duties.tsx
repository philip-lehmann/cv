import { Box, Stack, Typography } from '@mui/material';
import type { FC } from 'react';
import { getLocale } from 'next-intl/server';
import { type NamespaceKeys, type NestedKeyOf, useTranslations } from 'next-intl';
import { DashList, Dash } from './dash_list';
import { type LangType, monthYear } from '../helpers/date';

export interface DutiesProps<
  Namespace extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>> = NamespaceKeys<
    IntlMessages,
    NestedKeyOf<IntlMessages>
  >,
> {
  namespace: Namespace;
  duties: number;
  start: string;
  end: string;
}

export const Duties: FC<DutiesProps> = async ({ namespace, duties, start, end }) => {
  const t = useTranslations();
  const locale = (await getLocale()) as LangType;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{t(`${namespace}.name`)}</Typography>
        {monthYear(start, { locale })} - {end === 'now' ? t('date.now') : monthYear(end, { locale })}
      </Stack>
      <DashList>
        {Array.from({ length: duties }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Dash key={i}>{t(`${namespace}.list.item${i + 1}` as const)}</Dash>
        ))}
      </DashList>
    </Box>
  );
};
