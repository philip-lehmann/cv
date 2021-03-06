import React, { memo } from 'react'
import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
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
        <DashList>
          <Dash>
            &quot;Basislehrjahr&quot; in Uster Technologies together with other
            companies
          </Dash>
          <Dash>setting up the computers for during the exchange program</Dash>
          <Dash>
            create intranet based on PHP as a variant to MS SharePoint
          </Dash>
          <Dash>Microcontroller programming in C / C++</Dash>
          <Dash>Microcontroller network manager in C#</Dash>
        </DashList>
        <TooltipBadge namespace="uster_technologies" progress="70" name="PHP" />{' '}
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
