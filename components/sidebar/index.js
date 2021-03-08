import React, { memo } from 'react'

import AboutMe from 'components/sidebar/about_me'
import Contact from 'components/sidebar/contact'
import FollowMe from 'components/sidebar/follow_me'
import Interests from 'components/sidebar/interests'
import ComputerLanguages from 'components/sidebar/computer_languages'
import HumanLanguages from 'components/sidebar/human_languages'
import OperatingSystems from 'components/sidebar/operating_systems'

const Sidebar = memo(() => {
  return (
    <>
      <AboutMe />
      <Contact />
      <div style="page-break-before:always"></div>
      <ComputerLanguages />
      <HumanLanguages />
      <OperatingSystems />
      <FollowMe />
      <Interests />
    </>
  )
})
Sidebar.displayName = Sidebar

export default Sidebar
