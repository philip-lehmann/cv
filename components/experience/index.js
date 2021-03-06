import React, { memo } from 'react'

import { Card, CardBlock, CardTitle, Hr, H5, H6 } from '@bootstrap-styled/v4'

import Atpoint from 'components/experience/atpoint'
import Insign from 'components/experience/insign'
import DataQuest from 'components/experience/dataquest'
import UsterTechnologies from 'components/experience/uster_technologies'
import { FloatRight } from 'components/float'
import { monthYear } from 'helpers/date'

const Experience = memo(() => {
  return (
    <Card>
      <CardBlock>
        <CardTitle>Experience</CardTitle>
        <Atpoint />
        <Hr />
        <>
          <H5>English School</H5>
          <div>
            <FloatRight>
              {monthYear('2009-09-01')} - {monthYear('2009-11-01')}
            </FloatRight>
            <H6>Global Village Hawaii</H6>
          </div>
        </>
        <Hr />
        <Insign />
        <Hr />
        <>
          <H5>Army Service</H5>
          <div>
            <FloatRight>
              {monthYear('2006-11-01')} - {monthYear('2007-04-01')}
            </FloatRight>
            <H6>Electronic warfare (EKF)</H6>
          </div>
        </>
        <Hr />
        <DataQuest />
        <Hr />
        <UsterTechnologies />
      </CardBlock>
    </Card>
  )
})
Experience.displayName = 'Experience'

export default Experience
