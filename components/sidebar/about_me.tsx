import type { FC } from 'react';
import { differenceInYears, parseISO } from 'date-fns';
import { Card, CardContent, Typography, Box } from '@mui/material';

import { Trans as T } from '@cv/components/trans';

export const AboutMe: FC = () => {
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
          <T lang="en">About Me</T>
          <T lang="de">Über mich</T>
        </Typography>
        <Typography sx={{ textAlign: 'justify' }}>
          <T lang="en">
            Computers have always fascinated me. I began my career with an apprenticeship as System Engineer but once I
            started my first course with C, I quickly discovered my passion for programming. In my free time I continued
            to study and discover PHP and Java and developing several private projects. After my apprenticeship it was
            clear to me that I had found my professional calling and pursued my career in programming, for{' '}
            {differenceInYears(new Date(), parseISO('2007-06-01'))} years.
          </T>
          <T lang="de">
            Computer haben mich schon immer fasziniert. Ich habe meine Karriere mit einer Lehre als System Informatiker
            gestartet, aber als wir den ersten Programmierkurs in C hatten, habe ich meine Leidenschaft gefunden für das
            Programmieren. In meiner Freizeit habe ich angefangen PHP und Java zu lernen. Nach meiner Lehre war für mich
            klar, dass ich meine Berufung gefunden habe als Entwickler und habe nun seit{' '}
            {differenceInYears(new Date(), parseISO('2007-06-01'))} Jahren Erfahrungen gesammelt.
          </T>
        </Typography>
      </CardContent>
    </Card>
  );
};
