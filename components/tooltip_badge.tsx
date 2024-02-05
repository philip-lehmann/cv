import { memo, useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { Badge, Tooltip, Progress, ProgressBar, A } from '@bootstrap-styled/v4';
import { icons } from './tooltip_icons';

const ProgressWith = styled(Progress)`
  min-width: 100px;
`;

export const TooltipBadgeGroup = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const BadgeImg = styled('img')`
  width: 30px;
  height: 30px;
`;

interface TooltipBadgeProps {
  name: keyof typeof icons;
  namespace: string;
  progress: string;
}

export const TooltipBadge = memo<TooltipBadgeProps>(({ name, namespace, progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useMemo(() => {
    return `tooltip-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${namespace}`;
  }, [name, namespace]);

  const icon = icons[name];

  return (
    <>
      <A href={icon.url} id={id}>
        <Badge>
          {icon.type === 'svg' && <BadgeImg src={`/icons/${icon.icon}`} />}
          {icon.type === 'image' && (
            <picture>
              <source srcSet={`/icons/${icon.icon}.avif`} type="image/avif" />
              <source srcSet={`/icons/${icon.icon}.webp`} type="image/webp" />
              <BadgeImg src={`/icons/${icon.icon}.png`} alt={icon.name} />
            </picture>
          )}
        </Badge>
      </A>

      <Tooltip placement="top" isOpen={isOpen} target={id} toggle={() => setIsOpen(!isOpen)}>
        <h2>{icon.name}</h2>
        <ProgressWith>
          <ProgressBar valueNow={Number(progress)} />
        </ProgressWith>
      </Tooltip>
    </>
  );
});
TooltipBadge.displayName = 'TooltipBadge';
