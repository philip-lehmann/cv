'use server';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';
import { getLocale } from 'next-intl/server';
import type { FC } from 'react';
import { PdfIcon } from './icons/pdf';

export const LanguageSwitch: FC = async () => {
  const locale = await getLocale();
  return (
    <Stack
      direction="row"
      sx={{
        zIndex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        width: '100%',
        padding: '0 35px',
      }}
    >
      <IconButton
        href={{ pathname: '/api/pdf', query: { locale } }}
        download
        title="download curriculum vitae"
        sx={{ height: '30px', paddingRight: '15px' }}
        component={NextLink}
        disableRipple
      >
        <PdfIcon style={{ height: '30px' }} />
      </IconButton>

      <ButtonGroup>
        <Button
          href="/en"
          variant="contained"
          LinkComponent={NextLink}
          color={locale === 'en' ? 'primary' : 'secondary'}
          size="small"
        >
          EN
        </Button>
        <Button
          variant="contained"
          LinkComponent={NextLink}
          href="/de"
          color={locale === 'de' ? 'primary' : 'secondary'}
          size="small"
        >
          DE
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
