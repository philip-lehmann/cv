import React, { memo } from 'react'
import { Hr, H6 } from '@bootstrap-styled/v4'

import { Card, CardBlock, CardTitle } from 'components/experience/card'
import Atpoint from 'components/experience/atpoint'
import Insign from 'components/experience/insign'
import DataQuest from 'components/experience/dataquest'
import UsterTechnologies from 'components/experience/uster_technologies'
import { FloatRight } from 'components/float'

const Experience = memo(() => {
  return (
    <>
      <Card>
        <CardBlock>
          <CardTitle>Work Experience</CardTitle>
          <Atpoint />
          <Hr />
          <div style={{ 'page-break-before': 'always' }}></div>
          <Insign />
          <Hr />
          <DataQuest />
          <Hr />
          <UsterTechnologies />
        </CardBlock>
      </Card>

      <Card>
        <CardBlock>
          <CardTitle>Education</CardTitle>
          <div>
            <FloatRight>Sep - Nov 2009</FloatRight>
            <H6>English School - Global Village Hawaii</H6>
          </div>
          <div>
            <FloatRight>2006 - 2007</FloatRight>
            <H6>Army Service - Electronic warfare (EKF)</H6>
          </div>
          <div>
            <FloatRight>2002 - 2006</FloatRight>
          </div>
          <H6>Apprenticeship as System Engineer</H6>
          <div>
            <FloatRight>1999 - 2002</FloatRight>
            <H6>Secondary School (Sek A) - Wangen-Brüttisellen</H6>
          </div>
          <div>
            <FloatRight>1993 - 1999</FloatRight>
            <H6>Primary School - Brüttisellen</H6>
          </div>
        </CardBlock>
      </Card>
    </>
  )
})
Experience.displayName = 'Experience'

export default Experience
