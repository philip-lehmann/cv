import type { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export const Interests: FC = () => {
  const t = useTranslations('Interests');
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('name')}
        </Typography>
        <Typography variant="body1">{t('list')}</Typography>
      </CardContent>
    </Card>
  );
};
