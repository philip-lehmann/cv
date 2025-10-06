import { Box, Stack, Typography } from '@mui/material';
import type { Messages } from 'global';
import type { FC } from 'react';
import { type LangType, monthYear } from '../../helpers/date';
import { Dash, DashList } from './dash_list';
import { useLocale, useTranslations } from './intl';

export interface DutiesProps<Namespace extends keyof Messages = keyof Messages> {
  namespace: Namespace;
  duties: number;
  start: string;
  end: string;
}

export const Duties: FC<DutiesProps> = ({ namespace, duties, start, end }) => {
  const t = useTranslations();
  const locale = useLocale() as LangType;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">{t(`${String(namespace)}.name` as Parameters<typeof t>[0])}</Typography>
        {monthYear(start, { locale })} - {end === 'now' ? t('date.now') : monthYear(end, { locale })}
      </Stack>
      <DashList>
        {Array.from({ length: duties }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: needed
          <Dash key={i}>{t(`${String(namespace)}.list.item${i + 1}` as Parameters<typeof t>[0])}</Dash>
        ))}
      </DashList>
    </Box>
  );
};
