/* eslint no-console:off */

import React from 'react'
import getConfig from 'next/config'
import { NextPageContext, NextPage } from 'next'
import Rollbar from 'rollbar'

const { serverRuntimeConfig } = getConfig()

interface ErrorProps {
  statusCode?: number
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
}

ErrorPage.getInitialProps = ({ req, res, err }: NextPageContext) => {
  if (serverRuntimeConfig.rollbarServerToken) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    if (err) {
      console.log('Reporting error to Rollbar...')
      const rollbar = new Rollbar(serverRuntimeConfig.rollbarServerToken)
      rollbar.error(err, req, (rollbarError) => {
        if (rollbarError) {
          console.error('Rollbar error reporting failed:')
          console.error(rollbarError)
          return {}
        }
        console.log('Reported error to Rollbar')
      })
    }
    return { statusCode }
  }
  return {}
}
export default ErrorPage
