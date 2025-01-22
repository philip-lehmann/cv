import { memo, useState, useMemo, type FC } from 'react';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { icons } from './tooltip_icons';

interface TooltipBadgeProps {
  name: keyof typeof icons;
  namespace: string;
  progress: string;
}

export const TooltipBadgeGroup: FC<React.PropsWithChildren> = ({ children }) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>{children}</Box>
);

export const TooltipBadge: FC<TooltipBadgeProps> = memo(({ name, namespace, progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useMemo(() => {
    return `tooltip-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${namespace}`;
  }, [name, namespace]);

  const icon = icons[name];

  return (
    <>
      <Link href={icon.url} target="_blank" rel="noopener noreferrer" id={id} title={icon.name}>
        <Badge>
          {icon.type === 'svg' && <Box component="img" sx={{ width: 30, height: 30 }} src={`/icons/${icon.icon}`} />}
          {icon.type === 'image' && (
            <picture>
              <source srcSet={`/icons/${icon.icon}.avif`} type="image/avif" />
              <source srcSet={`/icons/${icon.icon}.webp`} type="image/webp" />
              <Box component="img" sx={{ width: 30, height: 30 }} src={`/icons/${icon.icon}.png`} alt={icon.name} />
            </picture>
          )}
        </Badge>
      </Link>

      <Tooltip
        title={
          <>
            <h2>{icon.name}</h2>
            <LinearProgress sx={{ minWidth: 100 }} variant="determinate" value={Number(progress)} />
          </>
        }
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <span />
      </Tooltip>
    </>
  );
});
TooltipBadge.displayName = 'TooltipBadge';
