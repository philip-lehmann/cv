import Typography from '@mui/material/Typography';
import type { FC } from 'react';

import { Duties } from '../duties';
import { useTranslations } from '../intl';
import { NoPageBreakBox } from '../print';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

export const Steiner: FC = () => {
  const t = useTranslations('Steiner');
  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Steiner.roles1" duties={8} start="2022-10-01" end="2024-02-29" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="90" name="typescript" />
        <TooltipBadge progress="90" name="nextjs" />
        <TooltipBadge progress="60" name="nestjs" />
        <TooltipBadge progress="60" name="tailwind" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="80" name="bullmq" />
        <TooltipBadge progress="85" name="typeorm" />
        <TooltipBadge progress="70" name="github-actions" />
        <TooltipBadge progress="90" name="git" />
        <TooltipBadge progress="50" name="nx" />
        <TooltipBadge progress="60" name="storybook" />
        <TooltipBadge progress="80" name="playwright" />
        <TooltipBadge progress="80" name="jest" />
        <TooltipBadge progress="80" name="postgres" />
        <TooltipBadge progress="80" name="redis" />
        <TooltipBadge progress="60" name="temporal" />
        <TooltipBadge progress="50" name="rabbitmq" />
        <TooltipBadge progress="60" name="kibana" />
        <TooltipBadge progress="30" name="terraform" />
        <TooltipBadge progress="60" name="auth0" />
        <TooltipBadge progress="85" name="docker" />
        <TooltipBadge progress="50" name="kubernetes" />
        <TooltipBadge progress="80" name="vscode" />
        <TooltipBadge progress="80" name="jira" />
        <TooltipBadge progress="80" name="confluence" />
        <TooltipBadge progress="30" name="azure" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
