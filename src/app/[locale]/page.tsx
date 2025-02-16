'use server';

import { type FC, lazy } from 'react';
import { Experience } from '../../components/experience';
import { Sidebar } from '../../components/sidebar';
import { Typography, Stack } from '@mui/material';
import type { LangType } from '../../helpers/date';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Video = lazy(() => import('../../components/video'));

type LocaleRequest = { params: Promise<{ locale: LangType }> };

export async function generateMetadata({ params }: LocaleRequest) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

const CV: FC<LocaleRequest> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }}>
      <Sidebar />
      <Stack
        sx={{
          padding: '35px',
        }}
      >
        <header>
          <Typography variant="h1" mt="100px">
            Philip Lehmann
          </Typography>
          <Typography variant="h3">Software Engineer</Typography>
        </header>
        <Experience />
      </Stack>
      <Video />
    </Stack>
  );
};

export default CV;
