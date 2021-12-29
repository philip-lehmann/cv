import React, { useEffect } from 'react'
import { NextPage } from 'next'
import T from 'components/trans'

const NotFound: NextPage = () => {
  useEffect(() => {
    window.onerror('404 page not found', window.location.href)
  }, [])
  return (
    <p>
      <T lang="en">Page could not be found</T>
      <T lang="de">Seite konnte nicht gefunden werden</T>
    </p>
  )
}

export default NotFound
