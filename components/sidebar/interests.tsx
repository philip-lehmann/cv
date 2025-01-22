import type { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Trans as T } from '@cv/components/trans';

export const Interests: FC = () => {
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <T lang="en">Personal Interests</T>
          <T lang="de">Persönliche Interessen</T>
        </Typography>
        <Typography variant="body1">
          <T lang="en">Cook / Surf / Scuba Dive / Snowboard / Bike / E-Sports</T>
          <T lang="de">Kochen / Surfen / Tauchen / Snowboard / Fahrrad / E-Sports</T>
        </Typography>
      </CardContent>
    </Card>
  );
};
