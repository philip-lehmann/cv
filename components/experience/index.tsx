import type { FC } from 'react';
import { Divider, Typography, Card, CardContent } from '@mui/material';
import { Quatico } from '@cv/components/experience/quatico';
import { Atpoint } from '@cv/components/experience/atpoint';
import { Insign } from '@cv/components/experience/insign';
import { Steiner } from '@cv/components/experience/steiner';
import { DataQuest } from '@cv/components/experience/dataquest';
import { Datage } from '@cv/components/experience/datage';
import { UsterTechnologies } from '@cv/components/experience/uster_technologies';
import { FloatRight } from '@cv/components/float';
import { Trans as T } from '@cv/components/trans';
import { LineBreak } from '../print';
import { HealthAdvisor } from './healthadvisor';

export const Experience: FC = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">
            <T lang="en">Work Experience</T>
            <T lang="de">Arbeitserfahrung</T>
          </Typography>
          <HealthAdvisor />
          <Divider />
          <Steiner />
          <Divider />
          <Quatico />
          <Divider />
          <LineBreak />
          <Datage />
          <Divider />
          <Atpoint />
          <Divider />
          <LineBreak />
          <Insign />
          <Divider />
          <DataQuest />
          <Divider />
          <UsterTechnologies />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5">
            <T lang="en">Education</T>
            <T lang="de">Ausbildung</T>
          </Typography>
          <div>
            <FloatRight>Sep - Nov 2009</FloatRight>
            <Typography variant="subtitle1">
              <T lang="en">English Language School - Global Village Hawaii</T>
              <T lang="de">Englisch Sprachaufenthalt - Global Village Hawaii</T>
            </Typography>
          </div>
          <div>
            <FloatRight>2006 - 2007</FloatRight>
            <Typography variant="subtitle1">
              <T lang="en">Army Service - Electronic warfare (EKF)</T>
              <T lang="de">Militärdienst - Elektronische Kriegsführung (EKF)</T>
            </Typography>
          </div>
          <div>
            <FloatRight>2002 - 2006</FloatRight>
          </div>
          <Typography variant="subtitle1">
            <T lang="en">Apprenticeship as System Engineer</T>
            <T lang="de">Lehre als System Informatiker</T>
          </Typography>
          <div>
            <FloatRight>1999 - 2002</FloatRight>
            <Typography variant="subtitle1">
              <T lang="en">Secondary School (Sek A) - Wangen-Brüttisellen</T>
              <T lang="de">Sekundarschule (Sek A) - Wangen-Brüttisellen</T>
            </Typography>
          </div>
          <div>
            <FloatRight>1993 - 1999</FloatRight>
            <Typography variant="subtitle1">
              <T lang="en">Primary School - Brüttisellen</T>
              <T lang="de">Primarschule - Brüttisellen</T>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
