import type { FC } from 'react';
import { Typography } from '@mui/material';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const Quatico: FC = () => {
  const t = useTranslations('Quatico');

  return (
    <>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Quatico.roles1" duties={2} start="2022-01-01" end="2022-09-30" />
      <Duties namespace="Quatico.roles2" duties={4} start="2021-09-01" end="2022-01-01" />
      <TooltipBadgeGroup>
        <TooltipBadge namespace="quatico" progress="90" name="es6" />
        <TooltipBadge namespace="quatico" progress="90" name="typescript" />
        <TooltipBadge namespace="quatico" progress="70" name="scss" />
        <TooltipBadge namespace="quatico" progress="90" name="html" />
        <TooltipBadge namespace="quatico" progress="95" name="react" />
        <TooltipBadge namespace="quatico" progress="60" name="storybook" />
        <TooltipBadge namespace="quatico" progress="90" name="webpack" />
        <TooltipBadge namespace="quatico" progress="40" name="playwright" />
        <TooltipBadge namespace="quatico" progress="80" name="jest" />
        <TooltipBadge namespace="quatico" progress="90" name="node" />
        <TooltipBadge namespace="quatico" progress="60" name="java" />
        <TooltipBadge namespace="quatico" progress="50" name="maven" />
        <TooltipBadge namespace="quatico" progress="30" name="solr" />
        <TooltipBadge namespace="quatico" progress="30" name="jenkins" />
        <TooltipBadge namespace="quatico" progress="80" name="git" />
        <TooltipBadge namespace="quatico" progress="85" name="docker" />
        <TooltipBadge namespace="quatico" progress="30" name="intellij" />
        <TooltipBadge namespace="quatico" progress="80" name="vscode" />
        <TooltipBadge namespace="quatico" progress="30" name="rancher" />
        <TooltipBadge namespace="quatico" progress="30" name="argocd" />
        <TooltipBadge namespace="quatico" progress="80" name="jira" />
        <TooltipBadge namespace="quatico" progress="80" name="confluence" />
        <TooltipBadge namespace="quatico" progress="80" name="bitbucket" />
        <TooltipBadge namespace="quatico" progress="60" name="magnolia" />
        <TooltipBadge namespace="quatico" progress="20" name="aem" />
      </TooltipBadgeGroup>
    </>
  );
};
