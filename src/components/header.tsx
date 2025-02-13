import type { FC } from 'react';
import { Box, Typography, Link } from '@mui/material';

interface HeaderProps {
  siteTitle?: string;
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => (
  <Box
    component="header"
    sx={{
      bgcolor: 'rebeccapurple',
      mb: '1.45rem',
    }}
  >
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          margin: 0,
        }}
      >
        <Link
          href="/"
          sx={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Typography>
    </Box>
  </Box>
);

export default Header;
