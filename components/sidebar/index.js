import React, { memo } from 'react'

import AboutMe from 'components/sidebar/about_me'
import Contact from 'components/sidebar/contact'
import FollowMe from 'components/sidebar/follow_me'
import Interests from 'components/sidebar/interests'
import Languages from 'components/sidebar/languages'

const Sidebar = memo(() => {
  return (
    <>
      <AboutMe />
      <Languages />
      <Contact />
      <FollowMe />
      <Interests />
    </>
  )
})
Sidebar.displayName = Sidebar

export default Sidebar
