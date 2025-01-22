import type { FC } from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';
import { Trans as T } from '@cv/components/trans';

export const Contact: FC = () => {
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <T lang="en">Contact</T>
          <T lang="de">Kontakt</T>
        </Typography>
        <Typography variant="body1">
          16.09.1986
          <br />
          <T lang="en">Swiss</T>
          <T lang="de">Schweizer</T>
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
