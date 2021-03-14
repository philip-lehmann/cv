import React, { memo } from 'react'
import { H5, H6 } from '@bootstrap-styled/v4'
import { useRouter } from 'next/router'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
import T from 'components/trans'
import { monthYear } from 'helpers/date'

const Insign = memo(() => {
  const { locale } = useRouter()
  return (
    <>
      <H5>insign GmbH</H5>
      <div>
        <FloatRight>
          {monthYear('2007-06-01', { locale })} -{' '}
          {monthYear('2010-05-01', { locale })}
        </FloatRight>
        <H6>
          <T lang="en">Software Engineer</T>
          <T lang="de">Software Entwickler</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">
            Maintain, create and deploy websites utilizing the internal CMS for
            customers (PWC, Finanz und Wirtschaft, Syngenta etc.)
          </T>
          <T lang="de">
            Unterhalt, entwicklung und deployment von Webseiten aufgebaut auf
            dem internen CMS nach Kundenwünschen (PWC, Finanz und Wirtschaft,
            Syngenta etc.)
          </T>
        </Dash>
        <Dash>
          <T lang="en">Update Piazza using PHP Template Engine Smarty</T>
          <T lang="de">
            Piazza Plattform mit der PHP Template Engine Smarty erweitern
          </T>
        </Dash>
        <Dash>
          <T lang="en">System administrator tasks</T>
          <T lang="de">Systemadministratoraufgaben</T>
        </Dash>
      </DashList>
      <TooltipBadge namespace="insign" progress="70" name="PHP" />{' '}
      <TooltipBadge namespace="insign" progress="90" name="JavaScript" />{' '}
      <TooltipBadge namespace="insign" progress="70" name="CSS" />{' '}
      <TooltipBadge namespace="insign" progress="90" name="HTML" />{' '}
      <TooltipBadge namespace="insign" progress="80" name="Mysql" />{' '}
      <TooltipBadge namespace="insign" progress="70" name="SVN" />{' '}
      <TooltipBadge namespace="insign" progress="65" name="Devops" />
    </>
  )
})
Insign.displayName = 'Insign'

export default Insign
