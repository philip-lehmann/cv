import type { FC } from 'react';
import { Typography } from '@mui/material';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { Duties } from '../duties';
import { useTranslations } from 'next-intl';

export const Datage: FC = () => {
  const t = useTranslations('Datage');
  return (
    <>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Datage.roles1" duties={2} start="2021-07-01" end="now" />
      <TooltipBadgeGroup>
        <TooltipBadge namespace="datage" progress="70" name="rancher" />
        <TooltipBadge namespace="datage" progress="70" name="postgres" />
        <TooltipBadge namespace="datage" progress="70" name="redis-cluster" />
        <TooltipBadge namespace="datage" progress="60" name="oauth-proxy" />
        <TooltipBadge namespace="datage" progress="60" name="keycloak" />
        <TooltipBadge namespace="datage" progress="70" name="cert-manager" />
        <TooltipBadge namespace="datage" progress="60" name="sealed-secrets" />
        <TooltipBadge namespace="datage" progress="90" name="typescript" />
        <TooltipBadge namespace="datage" progress="80" name="nextjs" />
        <TooltipBadge namespace="datage" progress="70" name="apollo" />
        <TooltipBadge namespace="datage" progress="80" name="prisma" />
        <TooltipBadge namespace="datage" progress="80" name="bullmq" />
        <TooltipBadge namespace="datage" progress="80" name="mui" />
        <TooltipBadge namespace="datage" progress="80" name="playwright" />
        <TooltipBadge namespace="datage" progress="80" name="html" />
        <TooltipBadge namespace="datage" progress="95" name="react" />
        <TooltipBadge namespace="datage" progress="50" name="vitest" />
        <TooltipBadge namespace="datage" progress="70" name="swc" />
        <TooltipBadge namespace="datage" progress="90" name="node" />
        <TooltipBadge namespace="datage" progress="50" name="nx" />
        <TooltipBadge namespace="datage" progress="80" name="git" />
        <TooltipBadge namespace="datage" progress="85" name="docker" />
        <TooltipBadge namespace="datage" progress="80" name="vscode" />
        <TooltipBadge namespace="datage" progress="80" name="github" />
        <TooltipBadge namespace="datage" progress="80" name="github-action-runner" />
        <TooltipBadge namespace="datage" progress="70" name="harbor" />
        <TooltipBadge namespace="datage" progress="50" name="eck" />
        <TooltipBadge namespace="datage" progress="50" name="gcp" />
        <TooltipBadge namespace="datage" progress="60" name="wordpress" />
      </TooltipBadgeGroup>
    </>
  );
};
