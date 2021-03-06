import styled from 'styled-components'
import { Ul, Li } from '@bootstrap-styled/v4'

export const DashList = styled(Ul)`
  margin-left: 0;
  padding-left: 10px;
`

export const Dash = styled(Li)`
  text-indent: 5px;
  &:before {
    content: '-';
    display: inline-block;
    width: 15px;
    margin-left: -20px;
  }
`
