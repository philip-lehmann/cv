import React, { FC } from 'react'

import { Card, CardHeader, Typography, Grid } from '@mui/material'

import Experience from 'components/experience'
import SidebarContent from 'components/sidebar'
import { LanguageSwitch } from './language_switch'

const CV: FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LanguageSwitch />
        </Grid>

        <Grid item xs={4}>
          <SidebarContent />
        </Grid>

        <Grid item xs={8}>
          <Card>
            <CardHeader>
              <Typography variant="h1">Philip Lehmann</Typography>
              <Typography variant="h3">Software Engineer</Typography>
            </CardHeader>
          </Card>
          <br />
          <br />
          <Experience />
        </Grid>
      </Grid>
    </>
  )
}
CV.displayName = 'CV'

export default CV
