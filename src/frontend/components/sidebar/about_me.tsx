import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';
import { useTranslations } from '../intl';
import { SidebarTitle } from './helper';

export const AboutMe: FC = () => {
  const t = useTranslations('AboutMe');

  return (
    <Stack gap={1} direction="column">
      <Stack justifyContent="center" alignItems="center">
        <picture>
          <source srcSet="/static/images/me/2@1x.avif, /static/images/me/2@2x.avif 2x" type="image/avif" />
          <source srcSet="/static/images/me/2@1x.webp, /static/images/me/2@2x.webp 2x" type="image/webp" />
          <source srcSet="/static/images/me/2@1x.jpg, /static/images/me/2@2x.jpg 2x" type="image/jpeg" />
          <Box
            component="img"
            src="/static/images/me/2@1x.jpg"
            alt="Philip Lehmann"
            sx={{
              borderRadius: '50%',
              maxWidth: '100%',
              aspectRatio: '1 / 1',
            }}
          />
        </picture>
      </Stack>
      <SidebarTitle>{t('name')}</SidebarTitle>
      <Typography align="justify">{t('story')}</Typography>
    </Stack>
  );
};
