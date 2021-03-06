import React, { memo } from 'react'

import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { monthYear } from 'helpers/date'

const UsterTechnologies = memo(() => {
  return (
    <>
      <H5>Uster Technologies</H5>
      <div>
        <FloatRight>
          {monthYear('2002-08-01')} - {monthYear('2006-07-01')}
        </FloatRight>
        <H6>Apprenticeship as System Engineer</H6>
      </div>
      <CardText>
        Even the apprenticeship was about systems informatics my interrest and
        also my assignments where more in developing. I could build an intranet
        solution in php for the company during my second year. Afterwards I came
        from the apprenticeship workship into the company where I was
        programming microcontroller in C and writing software in C# and Java.
        <br />
        <TooltipBadge
          namespace="uster_technologies"
          progress="70"
          name="PHP"
        />{' '}
        <TooltipBadge
          namespace="uster_technologies"
          progress="90"
          name="JavaScript"
        />{' '}
        <TooltipBadge namespace="uster_technologies" progress="70" name="CSS" />{' '}
        <TooltipBadge
          namespace="uster_technologies"
          progress="90"
          name="HTML"
        />{' '}
        <TooltipBadge namespace="uster_technologies" progress="60" name="C" />{' '}
        <TooltipBadge namespace="uster_technologies" progress="60" name="C++" />{' '}
        <TooltipBadge namespace="uster_technologies" progress="60" name="C#" />{' '}
        <TooltipBadge
          namespace="uster_technologies"
          progress="60"
          name="Java"
        />{' '}
        <TooltipBadge
          namespace="uster_technologies"
          progress="80"
          name="Mysql"
        />
      </CardText>
    </>
  )
})
UsterTechnologies.displayName = 'UsterTechnologies'

export default UsterTechnologies
