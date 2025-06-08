'use client';

import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { type FC, memo } from 'react';
import { icons } from './tooltip_icons';

interface TooltipBadgeProps {
  name: keyof typeof icons;
  progress: string;
}

export const TooltipBadgeGroup: FC<React.PropsWithChildren> = ({ children }) => (
  <Stack gap={0.5} flexWrap="wrap" direction="row">
    {children}
  </Stack>
);

export const TooltipBadge: FC<TooltipBadgeProps> = memo(({ name, progress }) => {
  const icon = icons[name];

  return (
    <Tooltip
      title={
        <>
          <h2>{icon.name}</h2>
          <LinearProgress sx={{ minWidth: 100, height: 10 }} variant="determinate" value={Number(progress)} />
        </>
      }
    >
      <IconButton
        href={icon.url}
        target="_blank"
        rel="noopener noreferrer"
        disableRipple
        sx={{ padding: 0, height: 39, width: 39, background: 'var(--mui-palette-background-custom)', borderRadius: 1 }}
      >
        {icon.type === 'svg' && <Box component="img" sx={{ width: 30, height: 30 }} src={`/icons/${icon.icon}`} />}
        {icon.type === 'image' && (
          <Box component="picture" sx={{ width: 30, height: 30 }}>
            <source srcSet={`/icons/${icon.icon}.avif`} type="image/avif" />
            <source srcSet={`/icons/${icon.icon}.webp`} type="image/webp" />
            <Box component="img" sx={{ width: 30, height: 30 }} src={`/icons/${icon.icon}.png`} alt={icon.name} />
          </Box>
        )}
      </IconButton>
    </Tooltip>
  );
});
TooltipBadge.displayName = 'TooltipBadge';
