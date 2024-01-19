import { memo, useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Badge, Tooltip, Progress, ProgressBar, A } from '@bootstrap-styled/v4';

const ProgressWith = styled(Progress)`
  min-width: 100px;
`;

export const TooltipBadgeGroup = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

interface TooltipBadgeProps {
  name: string;
  namespace: string;
  progress: string;
}

export const TooltipBadge = memo<TooltipBadgeProps>(({ name, namespace, progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useMemo(() => {
    return `tooltip-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${namespace}`;
  }, [name, namespace]);

  return (
    <>
      <A href="#" id={id}>
        <Badge>{name}</Badge>
      </A>

      <Tooltip placement="top" isOpen={isOpen} target={id} toggle={() => setIsOpen(!isOpen)}>
        <ProgressWith>
          <ProgressBar valueNow={Number(progress)} />
        </ProgressWith>
      </Tooltip>
    </>
  );
});
TooltipBadge.displayName = 'TooltipBadge';
