import React, { memo } from 'react'

import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
import { monthYear } from 'helpers/date'

const DataQuest = memo(() => {
  return (
    <>
      <H5>DataQuest</H5>
      <div>
        <FloatRight>
          {monthYear('2006-08-01')} - {monthYear('2006-11-01')}
        </FloatRight>
        <H6>Service Desk Support</H6>
      </div>
      <CardText>
        <DashList>
          <Dash>
            Design and implement a warehouse management system for the iPod
            replacement program using Java
          </Dash>
        </DashList>
        <TooltipBadge namespace="dataquest" progress="60" name="Java" />
      </CardText>
    </>
  )
})
DataQuest.displayName = 'DataQuest'

export default DataQuest
