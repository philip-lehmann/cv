import React, { memo } from 'react'
import { Typography } from '@mui/material'
import { Card, CardBlock, CardTitle } from 'components/experience/card'
import Quatico from 'components/experience/quatico'
import Atpoint from 'components/experience/atpoint'
import Insign from 'components/experience/insign'
import DataQuest from 'components/experience/dataquest'
import UsterTechnologies from 'components/experience/uster_technologies'
import { FloatRight } from 'components/float'
import T from 'components/trans'

const Experience = memo(() => {
  return (
    <>
      <Card>
        <CardBlock>
          <CardTitle>
            <T lang="en">Work Experience</T>
            <T lang="de">Arbeitserfahrung</T>
          </CardTitle>
          <Quatico />
          <hr />
          <Atpoint />
          <HrPrintHidden />
          <LineBreak />
          <Insign />
          <hr />
          <DataQuest />
          <hr />
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
            <Typography variant="h6">
              <T lang="en">English Language School - Global Village Hawaii</T>
              <T lang="de">Englisch Sprachaufenthalt - Global Village Hawaii</T>
            </Typography>
          </div>
          <div>
            <FloatRight>2006 - 2007</FloatRight>
            <Typography variant="h6">
              <T lang="en">Army Service - Electronic warfare (EKF)</T>
              <T lang="de">Militärdienst - Elektronische Kriegsführung (EKF)</T>
            </Typography>
          </div>
          <div>
            <FloatRight>2002 - 2006</FloatRight>
          </div>
          <Typography variant="h6">
            <T lang="en">Apprenticeship as System Engineer</T>
            <T lang="de">Lehre als System Informatiker</T>
          </Typography>
          <div>
            <FloatRight>1999 - 2002</FloatRight>
            <Typography variant="h6">
              <T lang="en">Secondary School (Sek A) - Wangen-Brüttisellen</T>
              <T lang="de">Sekundarschule (Sek A) - Wangen-Brüttisellen</T>
            </Typography>
          </div>
          <div>
            <FloatRight>1993 - 1999</FloatRight>
            <Typography variant="h6">
              <T lang="en">Primary School - Brüttisellen</T>
              <T lang="de">Primarschule - Brüttisellen</T>
            </Typography>
          </div>
        </CardBlock>
      </Card>
    </>
  )
})
Experience.displayName = 'Experience'

export default Experience
