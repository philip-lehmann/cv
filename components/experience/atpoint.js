import React, { memo } from 'react'

import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { monthYear } from 'helpers/date'

const Atpoint = memo(() => {
  return (
    <>
      <H5>atpoint ag</H5>
      <div>
        <FloatRight>{monthYear('2020-09-01')} - now</FloatRight>
        <H6>Head of Development</H6>
      </div>
      <CardText>
        Last year I was appointed as the team and architecture lead.
      </CardText>
      <br />
      <div>
        <FloatRight>
          {monthYear('2010-06-01')} - {monthYear('2020-09-01')}
        </FloatRight>
        <H6>Software Engineer</H6>
      </div>
      <CardText>
        At the beginning with the focus on HTML5 and touch we created our own
        multitouch devices with some applications for Post, Avaloq and Trilux.
        With the upcoming of the iPad we started consulting solutions with a
        native layer to transfer data between the WebViews over Bluetooth. Now
        having several Fintech Solutions over several Clients.
        <br />
        <TooltipBadge
          namespace="atpoint"
          progress="80"
          name="Ruby & Rails"
        />{' '}
        <TooltipBadge namespace="atpoint" progress="90" name="ES6" />{' '}
        <TooltipBadge namespace="atpoint" progress="85" name="Typescript" />{' '}
        <TooltipBadge namespace="atpoint" progress="85" name="Flow" />{' '}
        <TooltipBadge namespace="atpoint" progress="70" name="SCSS" />{' '}
        <TooltipBadge namespace="atpoint" progress="90" name="HTML" />{' '}
        <TooltipBadge namespace="atpoint" progress="95" name="React" />{' '}
        <TooltipBadge namespace="atpoint" progress="80" name="Ember" />{' '}
        <TooltipBadge namespace="atpoint" progress="90" name="node.js" />{' '}
        <TooltipBadge namespace="atpoint" progress="50" name="Objective-C" />{' '}
        <TooltipBadge namespace="atpoint" progress="60" name="Java" />{' '}
        <TooltipBadge namespace="atpoint" progress="70" name="PHP" />{' '}
        <TooltipBadge namespace="atpoint" progress="80" name="Mysql" />{' '}
        <TooltipBadge namespace="atpoint" progress="85" name="Postgres" />{' '}
        <TooltipBadge namespace="atpoint" progress="65" name="Elasticsearch" />{' '}
        <TooltipBadge namespace="atpoint" progress="80" name="Git" />{' '}
        <TooltipBadge namespace="atpoint" progress="75" name="Docker" />{' '}
        <TooltipBadge namespace="atpoint" progress="30" name="Kustomize" />{' '}
        <TooltipBadge namespace="atpoint" progress="30" name="Helm" />
      </CardText>
    </>
  )
})
Atpoint.displayName = 'Atpoint'

export default Atpoint
