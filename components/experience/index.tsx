import type { FC } from 'react';
import { Hr, H6, Card, CardBlock, CardTitle } from '@bootstrap-styled/v4';
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

export const Experience: FC = () => {
  return (
    <>
      <Card>
        <CardBlock>
          <CardTitle>
            <T lang="en">Work Experience</T>
            <T lang="de">Arbeitserfahrung</T>
          </CardTitle>
          <Steiner />
          <Hr />
          <Quatico />
          <Hr />
          <LineBreak />
          <Datage />
          <Hr />
          <Atpoint />
          <Hr />
          <LineBreak />
          <Insign />
          <Hr />
          <DataQuest />
          <Hr />
          <UsterTechnologies />
        </CardBlock>
      </Card>

      <Card>
        <CardBlock>
          <CardTitle>
            <T lang="en">Education</T>
            <T lang="de">Ausbildung</T>
          </CardTitle>
          <div>
            <FloatRight>Sep - Nov 2009</FloatRight>
            <H6>
              <T lang="en">English Language School - Global Village Hawaii</T>
              <T lang="de">Englisch Sprachaufenthalt - Global Village Hawaii</T>
            </H6>
          </div>
          <div>
            <FloatRight>2006 - 2007</FloatRight>
            <H6>
              <T lang="en">Army Service - Electronic warfare (EKF)</T>
              <T lang="de">Militärdienst - Elektronische Kriegsführung (EKF)</T>
            </H6>
          </div>
          <div>
            <FloatRight>2002 - 2006</FloatRight>
          </div>
          <H6>
            <T lang="en">Apprenticeship as System Engineer</T>
            <T lang="de">Lehre als System Informatiker</T>
          </H6>
          <div>
            <FloatRight>1999 - 2002</FloatRight>
            <H6>
              <T lang="en">Secondary School (Sek A) - Wangen-Brüttisellen</T>
              <T lang="de">Sekundarschule (Sek A) - Wangen-Brüttisellen</T>
            </H6>
          </div>
          <div>
            <FloatRight>1993 - 1999</FloatRight>
            <H6>
              <T lang="en">Primary School - Brüttisellen</T>
              <T lang="de">Primarschule - Brüttisellen</T>
            </H6>
          </div>
        </CardBlock>
      </Card>
    </>
  );
};
