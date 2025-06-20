import { Box, Stack, Typography } from '@mui/material';
import { type NamespaceKeys, type NestedKeyOf, useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import type { FC } from 'react';
import { type LangType, monthYear } from '../helpers/date';
import { Dash, DashList } from './dash_list';

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
        <Typography variant="h6">{t(`${namespace}.name` as Parameters<typeof t>[0])}</Typography>
        {monthYear(start, { locale })} - {end === 'now' ? t('date.now') : monthYear(end, { locale })}
      </Stack>
      <DashList>
        {Array.from({ length: duties }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: needed
          <Dash key={i}>{t(`${namespace}.list.item${i + 1}` as Parameters<typeof t>[0])}</Dash>
        ))}
      </DashList>
    </Box>
  );
};
