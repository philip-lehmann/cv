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
        <H6>Service Desk</H6>
      </div>
      <CardText>
        <DashList>
          <Dash>Service Desk - repair receipt</Dash>
          <Dash>
            write a warehouse management system in Java for the iPod replacement
            program in favor of an excel list. (done in my free time because i
            did not like the excel list)
          </Dash>
        </DashList>
        <TooltipBadge namespace="dataquest" progress="60" name="Java" />
      </CardText>
    </>
  )
})
DataQuest.displayName = 'DataQuest'

export default DataQuest
