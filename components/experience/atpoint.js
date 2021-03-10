import React, { memo } from 'react'
import { CardText, H5, H6 } from '@bootstrap-styled/v4'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
import { monthYear } from 'helpers/date'

// At the beginning with the focus on HTML5 and touch we created our own
// multitouch devices with some applications for Post, Avaloq and Trilux.
// With the upcoming of the iPad we started consulting solutions with a
// native layer to transfer data between the WebViews over Bluetooth. Now
// having several Fintech Solutions over several Clients.

const Atpoint = memo(() => {
  return (
    <>
      <H5>atpoint ag</H5>
      <div>
        <FloatRight>{monthYear('2020-09-01')} - now</FloatRight>
        <H6>Head of Development</H6>
      </div>
      <CardText>
        <DashList>
          <Dash>Lead, evaluate and monitor software development process</Dash>
          <Dash>
            Analyze and resolve software defects, improve and optimize existing
            functionality
          </Dash>
          <Dash>Architect reusable and maintainable software components</Dash>
          <Dash>Project planning, estimation and controlling</Dash>
          <Dash>Create project roadmap and define project setup</Dash>
          <Dash>Quality and security control of projects</Dash>
          <Dash>
            Manage and coach software development team (5 employees, incl.
            recruitment, performance reviews, know-how transfers)
          </Dash>
        </DashList>
      </CardText>
      <br />
      <div>
        <FloatRight>
          {monthYear('2010-06-01')} - {monthYear('2020-09-01')}
        </FloatRight>
        <H6>Software Engineer</H6>
      </div>
      <CardText>
        <DashList>
          <Dash>Agile and innovative software development</Dash>
          <Dash>
            Improve the functionality, usability, architecture and quality of
            the software
          </Dash>
          <Dash>
            Specification, implementation, test and documentation of software
          </Dash>
          <Dash>
            Set up production environments and create deployment pipelines
          </Dash>
          <Dash>
            Further development of existing applications (maintenance and
            support, troubleshooting, continuous improvements of the existing
            code base)
          </Dash>
        </DashList>
        <br />
        <H6>Project references:</H6>
        <DashList>
          <Dash>
            Multitouch applications based on HTML5 with a REST API in Ruby &amp;
            Rails with a synchronization over websockets in the case of Trilux (
            <a
              href="https://www.youtube.com/watch?v=11iK1_jvGio"
              rel="noopener noreferrer"
              target="_blank"
            >
              Post
            </a>{' '}
            <a
              href="https://www.youtube.com/watch?v=4iaAD4nZizQ"
              rel="noopener noreferrer"
              target="_blank"
            >
              Avaloq
            </a>{' '}
            <a
              href="https://www.youtube.com/watch?v=y3I30wolftc"
              rel="noopener noreferrer"
              target="_blank"
            >
              Trilux
            </a>
            )
          </Dash>
          <Dash>
            Microsoft Kinect demo in HTML5 (
            <a
              href="https://www.youtube.com/watch?v=-09y8g2Zd2I"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
            )
          </Dash>

          <Dash>
            iPad / Touch offline application in HTML5 (
            <a
              href="https://www.youtube.com/watch?v=N8Qa2rHR7nE"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
            )
          </Dash>
        </DashList>
        <TooltipBadge namespace="atpoint" progress="80" name="Ruby & Rails" />{' '}
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
