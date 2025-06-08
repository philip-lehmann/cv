import type { FC } from 'react';
import { Divider, Typography, Stack, Box } from '@mui/material';
import { Quatico } from './quatico';
import { Atpoint } from './atpoint';
import { Insign } from './insign';
import { Steiner } from './steiner';
import { DataQuest } from './dataquest';
import { Datage } from './datage';
import { UsterTechnologies } from './uster_technologies';
import { PageBreak } from '../print';
import { HealthAdvisor } from './healthadvisor';
import { useTranslations } from 'next-intl';

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
      <Divider />
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
