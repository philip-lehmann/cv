import styled from 'styled-components'
import { Hr } from '@bootstrap-styled/v4'

export const HrPrintHidden = styled(Hr)`
  @media print {
    display: none !important;
  }
`

export const LineBreak = styled('div')`
  page-break-before: always;
  @media print {
    height: 70px;
  }
`
