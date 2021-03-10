import React, { memo } from 'react'
import styled from 'styled-components'
import AboutMe from 'components/sidebar/about_me'
import Contact from 'components/sidebar/contact'
import FollowMe from 'components/sidebar/follow_me'
import Interests from 'components/sidebar/interests'
import ComputerLanguages from 'components/sidebar/computer_languages'
import HumanLanguages from 'components/sidebar/human_languages'
import OperatingSystems from 'components/sidebar/operating_systems'

const LineBreak = styled('div')`
  page-break-before: always;
  @media print {
    height: 50px;
  }
`

const Sidebar = memo(() => {
  return (
    <>
      <AboutMe />
      <Contact />
      <HumanLanguages />
      <FollowMe />
      <LineBreak />
      <ComputerLanguages />
      <OperatingSystems />
      <Interests />
    </>
  )
})
Sidebar.displayName = Sidebar

export default Sidebar
