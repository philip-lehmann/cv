import React, { memo, useState, useMemo } from 'react'
import { styled, LinearProgress, Badge, Tooltip } from '@mui/material'

const ProgressWith = styled(LinearProgress)`
  min-width: 100px;
`

interface TooltipBadgeProps {
  name: string
  namespace: string
  progress: string
}

const TooltipBadge = memo<TooltipBadgeProps>(({ name, namespace, progress }) => {
  const [isOpen, setIsOpen] = useState(false)
  const id = useMemo(() => {
    return `tooltip-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${namespace}`
  }, [name, namespace])

  return (
    <>
      <A href="#" id={id}>
        <Badge aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" role="skill">
          {name}
        </Badge>
      </A>

      <Tooltip placement="top" target={id} toggle={() => setIsOpen(!isOpen)}>
        <LinearProgress value={Number(progress)} />
      </Tooltip>
    </>
  )
})
TooltipBadge.displayName = 'TooltipBadge'

export default TooltipBadge
