import type { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Container, Stack, Typography } from '@mui/material';
import { type FC, lazy, Suspense } from 'react';
import { breakpoint } from '../../breakpoint';
import { Experience } from '../../components/experience';
import { IntlProvider, type Messages } from '../../components/intl';
import { LanguageSwitch } from '../../components/language_switch';
import { Sidebar } from '../../components/sidebar';
import { theme } from '../../theme';

const Video = lazy(() => import('../../components/video'));

const Page: FC<{
  messages: Messages;
  cache: EmotionCache;
  locale: string;
}> = ({ messages, cache, locale }) => {
  return (
    <IntlProvider messages={messages} locale={locale}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Container
            sx={{
              position: 'relative',
              '@media print': {
                maxWidth: '100vw',
              },
              padding: 0,
            }}
          >
            <LanguageSwitch />
            <Stack direction={{ xs: 'column', [breakpoint]: 'row' }}>
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
              <Suspense fallback={<div>Loading...</div>}>
                <Video />
              </Suspense>
            </Stack>
          </Container>
        </ThemeProvider>
      </CacheProvider>
    </IntlProvider>
  );
};

export default Page;
