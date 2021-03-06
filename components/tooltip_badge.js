import React, { memo, useState, useMemo } from 'react'
import styled from 'styled-components'
import { Badge, Tooltip, Progress, ProgressBar, A } from '@bootstrap-styled/v4'

const ProgressWith = styled(Progress)`
  min-width: 100px;
`

const TooltipBadge = memo(({ name, namespace, progress }) => {
  const [isOpen, setIsOpen] = useState(false)
  const id = useMemo(() => {
    return `tooltip-${name.replace(/(\W+)/g, '')}-${namespace}`
  }, [name, namespace])

  return (
    <>
      <A href="#" id={id}>
        <Badge>{name}</Badge>
      </A>

      <Tooltip
        placement="top"
        isOpen={isOpen}
        target={id}
        toggle={() => setIsOpen(!isOpen)}
      >
        <ProgressWith>
          <ProgressBar valueNow={Number(progress)} />
        </ProgressWith>
      </Tooltip>
    </>
  )
})
TooltipBadge.displayName = 'TooltipBadge'

export default TooltipBadge
