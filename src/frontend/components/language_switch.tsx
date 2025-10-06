import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import type { FC } from 'react';
import { PdfIcon } from './icons/pdf';
import { useLocale } from './intl';
import { Link } from './link';

export const LanguageSwitch: FC = () => {
  const locale = useLocale();
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
        component={Link}
        disableRipple
      >
        <PdfIcon style={{ height: '30px' }} />
      </IconButton>

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
    </Stack>
  );
};
