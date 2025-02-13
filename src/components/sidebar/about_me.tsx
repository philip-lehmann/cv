import type { FC } from 'react';
import { differenceInYears, parseISO } from 'date-fns';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslations } from 'next-intl';

export const AboutMe: FC = () => {
  const t = useTranslations('AboutMe');
  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <picture>
          <source srcSet="/images/me/2@1x.avif, /images/me/2@2x.avif 2x" type="image/avif" />
          <source srcSet="/images/me/2@1x.webp, /images/me/2@2x.webp 2x" type="image/webp" />
          <source srcSet="/images/me/2@1x.jpg, /images/me/2@2x.jpg 2x" type="image/jpeg" />
          <Box
            component="img"
            src="/images/me/2@1x.jpg"
            alt="Philip Lehmann"
            width="250"
            height="250"
            sx={{
              width: 250,
              borderRadius: '125px',
              maxWidth: '100%',
            }}
          />
        </picture>
        <br />
        <br />
        <Typography variant="h6" component="h2" gutterBottom>
          {t('name')}
        </Typography>
        <Typography sx={{ textAlign: 'justify' }}>
          {t('story', { years: differenceInYears(new Date(), parseISO('2007-06-01')) })}
        </Typography>
      </CardContent>
    </Card>
  );
};
