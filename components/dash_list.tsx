import { styled } from '@mui/material'

export const DashList = styled('ul')`
  margin-left: 0;
  padding-left: 10px;
`

export const Dash = styled('li')`
  text-indent: 5px;
  &:before {
    content: '-';
    display: inline-block;
    width: 15px;
    margin-left: -20px;
  }
`
