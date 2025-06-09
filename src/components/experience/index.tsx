import { Box, Divider, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { PageBreak } from '../print';
import { Atpoint } from './atpoint';
import { Datage } from './datage';
import { DataQuest } from './dataquest';
import { HealthAdvisor } from './healthadvisor';
import { Insign } from './insign';
import { Quatico } from './quatico';
import { Steiner } from './steiner';
import { UsterTechnologies } from './uster_technologies';

export const Experience: FC = () => {
  const t = useTranslations('Experience');
  return (
    <Stack spacing={2} pt="80px">
      <Typography variant="h5">{t('work.name')}</Typography>
      <HealthAdvisor />
      <Divider />
      <Steiner />
      <PageBreak />
      <Quatico />
      <Divider />
      <Datage />
      <PageBreak />
      <Atpoint />
      <PageBreak />
      <Insign />
      <Divider />
      <DataQuest />
      <Divider />
      <UsterTechnologies />

      <Divider />
      <Box>
        <Typography variant="h4">{t('education.name')}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('education.list.languageSchool')}</Typography>
          <Box>Sep - Nov 2009</Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('education.list.army')}</Typography>
          <Box>2006 - 2007</Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('education.list.apprenticeship')}</Typography>
          <Box>2002 - 2006</Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('education.list.secondarySchool')}</Typography>
          <Box>1999 - 2002</Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{t('education.list.primarySchool')}</Typography>
          <Box>1993 - 1999</Box>
        </Stack>
      </Box>
    </Stack>
  );
};
