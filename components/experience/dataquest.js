import React, { memo } from 'react'

import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
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
        Between the army and the apprenticeship I could help 3 Month in the
        Service Department. In my free time I wrote a Java application to manage
        the iPod exchange which was in an Excel file before.
        <br />
        <TooltipBadge namespace="dataquest" progress="60" name="Java" />
      </CardText>
    </>
  )
})
DataQuest.displayName = 'DataQuest'

export default DataQuest
