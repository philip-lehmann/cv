import type { FC } from 'react';
import { Typography } from '@mui/material';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const Steiner: FC = () => {
  const t = useTranslations('Steiner');
  return (
    <>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Steiner.roles1" duties={8} start="2022-10-01" end="2024-02-29" />
      <TooltipBadgeGroup>
        <TooltipBadge namespace="steiner" progress="90" name="typescript" />
        <TooltipBadge namespace="steiner" progress="90" name="nextjs" />
        <TooltipBadge namespace="steiner" progress="60" name="nestjs" />
        <TooltipBadge namespace="steiner" progress="60" name="tailwind" />
        <TooltipBadge namespace="steiner" progress="90" name="html" />
        <TooltipBadge namespace="steiner" progress="80" name="bullmq" />
        <TooltipBadge namespace="steiner" progress="85" name="typeorm" />
        <TooltipBadge namespace="steiner" progress="70" name="github-actions" />
        <TooltipBadge namespace="steiner" progress="90" name="git" />
        <TooltipBadge namespace="steiner" progress="50" name="nx" />
        <TooltipBadge namespace="steiner" progress="60" name="storybook" />
        <TooltipBadge namespace="steiner" progress="80" name="playwright" />
        <TooltipBadge namespace="steiner" progress="80" name="jest" />
        <TooltipBadge namespace="steiner" progress="80" name="postgres" />
        <TooltipBadge namespace="steiner" progress="80" name="redis" />
        <TooltipBadge namespace="steiner" progress="60" name="temporal" />
        <TooltipBadge namespace="steiner" progress="50" name="rabbitmq" />
        <TooltipBadge namespace="steiner" progress="60" name="kibana" />
        <TooltipBadge namespace="steiner" progress="30" name="terraform" />
        <TooltipBadge namespace="steiner" progress="60" name="auth0" />
        <TooltipBadge namespace="steiner" progress="80" name="git" />
        <TooltipBadge namespace="steiner" progress="85" name="docker" />
        <TooltipBadge namespace="steiner" progress="50" name="kubernetes" />
        <TooltipBadge namespace="steiner" progress="80" name="vscode" />
        <TooltipBadge namespace="steiner" progress="80" name="jira" />
        <TooltipBadge namespace="steiner" progress="80" name="confluence" />
        <TooltipBadge namespace="steiner" progress="30" name="azure" />
      </TooltipBadgeGroup>
    </>
  );
};
