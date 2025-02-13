'use server';

import type { FC } from 'react';
import { Experience } from '../../components/experience';
import { Sidebar } from '../../components/sidebar';
import { LanguageSwitch } from '../../components/language_switch';
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import type { LangType } from '../../helpers/date';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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
    <Stack sx={{ position: 'relative' }} direction="row">
      <Box
        sx={{
          background: 'linear-gradient(90deg, rgba(222, 222, 224, 1) 0%, rgba(233, 233, 235, 1) 100%)',
          minHeight: '100vh',
          '@media print': {
            height: '300vh',
          },
          width: '300px',
        }}
      >
        <Sidebar />
      </Box>
      <Box>
        <Card>
          <CardContent>
            <header>
              <Typography variant="h1">Philip Lehmann</Typography>
              <Typography variant="h3">Software Engineer</Typography>
            </header>
          </CardContent>
        </Card>
        <br />
        <br />
        <Experience />
      </Box>
      <LanguageSwitch />
    </Stack>
  );
};

export default CV;
