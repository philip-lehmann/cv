import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { Duties } from '../duties';
import { NoPageBreakBox } from '../print';

export const Datage: FC = () => {
  const t = useTranslations('Datage');
  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Datage.roles1" duties={2} start="2021-07-01" end="now" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="70" name="rancher" />
        <TooltipBadge progress="70" name="postgres" />
        <TooltipBadge progress="70" name="redis-cluster" />
        <TooltipBadge progress="60" name="oauth-proxy" />
        <TooltipBadge progress="60" name="keycloak" />
        <TooltipBadge progress="70" name="cert-manager" />
        <TooltipBadge progress="60" name="sealed-secrets" />
        <TooltipBadge progress="90" name="typescript" />
        <TooltipBadge progress="80" name="nextjs" />
        <TooltipBadge progress="70" name="apollo" />
        <TooltipBadge progress="80" name="prisma" />
        <TooltipBadge progress="80" name="bullmq" />
        <TooltipBadge progress="80" name="mui" />
        <TooltipBadge progress="80" name="playwright" />
        <TooltipBadge progress="80" name="html" />
        <TooltipBadge progress="95" name="react" />
        <TooltipBadge progress="50" name="vitest" />
        <TooltipBadge progress="70" name="swc" />
        <TooltipBadge progress="90" name="node" />
        <TooltipBadge progress="50" name="nx" />
        <TooltipBadge progress="80" name="git" />
        <TooltipBadge progress="85" name="docker" />
        <TooltipBadge progress="80" name="vscode" />
        <TooltipBadge progress="80" name="github" />
        <TooltipBadge progress="80" name="github-action-runner" />
        <TooltipBadge progress="70" name="harbor" />
        <TooltipBadge progress="50" name="eck" />
        <TooltipBadge progress="50" name="gcp" />
        <TooltipBadge progress="60" name="wordpress" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
