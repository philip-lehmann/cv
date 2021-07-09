import React, { memo, useState, useMemo } from 'react'
import styled from 'styled-components'
import { Badge, Tooltip, Progress, ProgressBar, A } from '@bootstrap-styled/v4'

const ProgressWith = styled(Progress)`
  min-width: 100px;
`

interface TooltipBadgeProps {
  name: string
  namespace: string
  progress: string
}

const TooltipBadge = memo<TooltipBadgeProps>(
  ({ name, namespace, progress }) => {
    const [isOpen, setIsOpen] = useState(false)
    const id = useMemo(() => {
      return `tooltip-${name
        .replace(/[^a-zA-Z0-9]/g, '-')
        .toLowerCase()}-${namespace}`
    }, [name, namespace])

    return (
      <>
        <A href="#" id={id}>
          <Badge
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            role="skill"
          >
            {name}
          </Badge>
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
  }
)
TooltipBadge.displayName = 'TooltipBadge'

export default TooltipBadge
