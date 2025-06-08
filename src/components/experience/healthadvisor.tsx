import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Duties } from '../duties';
import { NoPageBreakBox } from '../print';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

export const HealthAdvisor: FC = () => {
  const t = useTranslations('HealthAdvisor');

  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="HealthAdvisor.roles1" duties={8} start="2024-04-01" end="now" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="90" name="node" />
        <TooltipBadge progress="30" name="python" />
        <TooltipBadge progress="90" name="typescript" />
        <TooltipBadge progress="90" name="javascript" />
        <TooltipBadge progress="90" name="swc" />
        <TooltipBadge progress="90" name="webpack" />
        <TooltipBadge progress="90" name="express" />
        <TooltipBadge progress="90" name="mui" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="90" name="nextjs" />
        <TooltipBadge progress="60" name="sequelize" />
        <TooltipBadge progress="70" name="github-actions" />
        <TooltipBadge progress="70" name="circleci" />
        <TooltipBadge progress="90" name="git" />
        <TooltipBadge progress="80" name="playwright" />
        <TooltipBadge progress="80" name="puppeteer" />
        <TooltipBadge progress="80" name="jest" />
        <TooltipBadge progress="80" name="postgres" />
        <TooltipBadge progress="80" name="redis" />
        <TooltipBadge progress="90" name="docker" />
        <TooltipBadge progress="80" name="vscode" />
        <TooltipBadge progress="80" name="oidc" />
        <TooltipBadge progress="80" name="trello" />
        <TooltipBadge progress="50" name="phrase" />
        <TooltipBadge progress="50" name="cloudflare" />
        <TooltipBadge progress="50" name="flow_swiss" />
        <TooltipBadge progress="50" name="azure" />
        <TooltipBadge progress="50" name="gcp" />
        <TooltipBadge progress="50" name="grafana" />
        <TooltipBadge progress="50" name="prometheus" />
        <TooltipBadge progress="50" name="jelastic" />
        <TooltipBadge progress="80" name="nx" />
        <TooltipBadge progress="60" name="storybook" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
