/* global process */
/* eslint no-console:off */

import React from 'react'
import getConfig from 'next/config'
import Rollbar from 'rollbar'

const { serverRuntimeConfig } = getConfig()

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  // Only require Rollbar and report error if we're on the server
  if (!process.browser) {
    console.log('Reporting error to Rollbar...')
    const rollbar = new Rollbar(serverRuntimeConfig.rollbarServerToken)
    rollbar.error(err, req, (rollbarError) => {
      if (rollbarError) {
        console.error('Rollbar error reporting failed:')
        console.error(rollbarError)
        return
      }
      console.log('Reported error to Rollbar')
    })
  }
  return { statusCode }
}
export default Error
