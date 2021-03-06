import React, { memo } from 'react'
import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
import { monthYear } from 'helpers/date'

const Insign = memo(() => {
  return (
    <>
      <H5>insign GmbH</H5>
      <div>
        <FloatRight>
          {monthYear('2007-06-01')} - {monthYear('2010-05-01')}
        </FloatRight>
        <H6>Software Engineer</H6>
      </div>
      <CardText>
        <DashList>
          <Dash>
            maintain and create Website with the internal CMS for customer like
            PWC, Finanz und Wirtschaft, Syngenta
          </Dash>
          <Dash>update Pizza to smarty and continue development</Dash>
          <Dash>system administrator tasks</Dash>
        </DashList>
        <br />
        <TooltipBadge namespace="insign" progress="70" name="PHP" />{' '}
        <TooltipBadge namespace="insign" progress="90" name="JavaScript" />{' '}
        <TooltipBadge namespace="insign" progress="70" name="CSS" />{' '}
        <TooltipBadge namespace="insign" progress="90" name="HTML" />{' '}
        <TooltipBadge namespace="insign" progress="80" name="Mysql" />{' '}
        <TooltipBadge namespace="insign" progress="70" name="SVN" />{' '}
        <TooltipBadge namespace="insign" progress="65" name="Devops" />
      </CardText>
    </>
  )
})
Insign.displayName = 'Insign'

export default Insign
