import React, { memo } from 'react'
import { H5, H6 } from '@bootstrap-styled/v4'
import { useRouter } from 'next/router'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList } from 'components/dash_list'
import T from 'components/trans'
import { monthYear, LangType } from 'helpers/date'

const Steiner = memo(() => {
  const { locale } = useRouter()
  return (
    <>
      <H5>steiner ag</H5>
      <div>
        <FloatRight>
          {monthYear('2022-10-01', { locale: locale as LangType })} - <T lang="en">Now</T>
          <T lang="de">Jetzt</T>
        </FloatRight>
        <H6>
          <T lang="en">Senior Software Engineer</T>
          <T lang="de">Senior Software Engineer</T>
        </H6>
      </div>
      <DashList></DashList>
      <TooltipBadge namespace="steiner" progress="90" name="Typescript" />{' '}
      <TooltipBadge namespace="steiner" progress="90" name="Next.js" />{' '}
      <TooltipBadge namespace="steiner" progress="10" name="NestJs" />{' '}
      <TooltipBadge namespace="steiner" progress="60" name="Elasticsearch" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Github" />{' '}
      <TooltipBadge namespace="steiner" progress="70" name="Github Actions" />{' '}
      <TooltipBadge namespace="steiner" progress="90" name="Git" />{' '}
      <TooltipBadge namespace="steiner" progress="10" name="NX" />{' '}
      <TooltipBadge namespace="steiner" progress="85" name="Docker" />{' '}
      <TooltipBadge namespace="steiner" progress="50" name="Kubernetes" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="VS Code" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Jira" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Confluence" />{' '}
    </>
  )
})
Steiner.displayName = 'Steiner'

export default Steiner
