'use server';

import type { FC } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { PdfIcon } from './icons/pdf';
import { getLocale } from 'next-intl/server';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = async ({ className = '' }) => {
  const locale = await getLocale();
  return (
    <Box
      sx={{
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        '@media (min-width: 576px)': {
          justifyContent: 'flex-end',
        },
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: '15px',
        '@media print': {
          display: 'none !important',
        },
      }}
    >
      <Link
        href={{ pathname: '/api/pdf', query: { locale } }}
        download
        title="download curriculum vitae"
        style={{ height: '30px', paddingRight: '15px' }}
      >
        <IconButton>
          <PdfIcon sx={{ height: '30px' }} />
        </IconButton>
      </Link>

      <ButtonGroup>
        <Button
          href="/en"
          variant="contained"
          LinkComponent={Link}
          color={locale === 'en' ? 'primary' : 'secondary'}
          size="small"
        >
          EN
        </Button>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/de"
          color={locale === 'de' ? 'primary' : 'secondary'}
          size="small"
        >
          DE
        </Button>
      </ButtonGroup>
    </Box>
  );
};
