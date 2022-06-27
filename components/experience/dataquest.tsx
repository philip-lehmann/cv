import React, { memo } from 'react'

import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FloatRight } from 'components/float'
import TooltipBadge from 'components/tooltip_badge'
import { DashList, Dash } from 'components/dash_list'
import T from 'components/trans'
import { monthYear, LangType } from 'helpers/date'

const DataQuest = memo(() => {
  const { locale } = useRouter()
  return (
    <>
      <Typography variant="h5">DataQuest</Typography>
      <div>
        <FloatRight>
          {monthYear('2006-08-01', { locale: locale as LangType })} -{' '}
          {monthYear('2006-11-01', { locale: locale as LangType })}
        </FloatRight>
        <Typography variant="h6">
          <T lang="en">Service Desk - Support</T>
          <T lang="de">Service Desk - Support</T>
        </Typography>
      </div>
      <DashList>
        <Dash>
          <T lang="en">
            Design and implement a warehouse management system for the iPod replacement program using Java
          </T>
          <T lang="de">Entwickeln einer Lagerverwalung für das iPod austausch Program in Java.</T>
        </Dash>
      </DashList>
      <TooltipBadge namespace="dataquest" progress="60" name="Java" />
    </>
  )
})
DataQuest.displayName = 'DataQuest'

export default DataQuest
