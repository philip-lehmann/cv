import React, { type FC, type ComponentProps } from 'react'
import styled from 'styled-components'
import { Ul, Li } from '@bootstrap-styled/v4'

const List = styled(Ul)`
  margin-left: 0;
  padding-left: 10px;
`

export const DashList: FC<ComponentProps<typeof List>> = ({ children, ...props }) => {
  return (
    <List {...props} role="list">
      {children}
    </List>
  )
}

export const Dash = styled(Li)`
  text-indent: 5px;
  &:before {
    content: '-';
    display: inline-block;
    width: 15px;
    margin-left: -20px;
  }
`
