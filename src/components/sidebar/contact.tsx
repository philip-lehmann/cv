import type { FC } from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';
import { useTranslations } from 'next-intl';

export const Contact: FC = () => {
  const t = useTranslations('Contact');
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('name')}
        </Typography>
        <Typography variant="body1">
          16.09.1986
          <br />
          {t('swiss')}
          <br />
          <br />
          <Link href="tel:0041797562627">+41 79 756 26 27</Link>
          <br />
          <Link href="mailto:hireme@philiplehmann.ch">hireme@philiplehmann.ch</Link>
          <br />
          <Link href="https://philiplehmann.ch" target="_blank" rel="noopener noreferrer">
            philiplehmann.ch
          </Link>
          <br />
          <br />
          8820 Wädenswil
        </Typography>
      </CardContent>
    </Card>
  );
};
