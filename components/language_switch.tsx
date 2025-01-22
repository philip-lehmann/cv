import type { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { PdfIcon } from './icons/pdf';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({ className = '' }) => {
  const { locale } = useRouter();
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

      <Box
        className={className}
        sx={{
          '& > a': {
            textDecoration: 'none',
          },
          '& :first-of-type': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& :last-of-type': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
      >
        <Link href={{ href: '/' }} locale="en" passHref legacyBehavior>
          <Button variant="contained" color={locale === 'en' ? 'primary' : 'secondary'} size="small">
            EN
          </Button>
        </Link>
        <Link href={{ href: '/' }} locale="de" passHref legacyBehavior>
          <Button variant="contained" color={locale === 'de' ? 'primary' : 'secondary'} size="small">
            DE
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
