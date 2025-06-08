import type { FC } from 'react';
import Typography from '@mui/material/Typography';

import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';
import { NoPageBreakBox } from '../print';

export const Quatico: FC = () => {
  const t = useTranslations('Quatico');

  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Quatico.roles1" duties={2} start="2022-01-01" end="2022-09-30" />
      <Duties namespace="Quatico.roles2" duties={4} start="2021-09-01" end="2022-01-01" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="90" name="es6" />
        <TooltipBadge progress="90" name="typescript" />
        <TooltipBadge progress="70" name="scss" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="95" name="react" />
        <TooltipBadge progress="60" name="storybook" />
        <TooltipBadge progress="90" name="webpack" />
        <TooltipBadge progress="40" name="playwright" />
        <TooltipBadge progress="80" name="jest" />
        <TooltipBadge progress="90" name="node" />
        <TooltipBadge progress="60" name="java" />
        <TooltipBadge progress="50" name="maven" />
        <TooltipBadge progress="30" name="solr" />
        <TooltipBadge progress="30" name="jenkins" />
        <TooltipBadge progress="80" name="git" />
        <TooltipBadge progress="85" name="docker" />
        <TooltipBadge progress="30" name="intellij" />
        <TooltipBadge progress="80" name="vscode" />
        <TooltipBadge progress="30" name="rancher" />
        <TooltipBadge progress="30" name="argocd" />
        <TooltipBadge progress="80" name="jira" />
        <TooltipBadge progress="80" name="confluence" />
        <TooltipBadge progress="80" name="bitbucket" />
        <TooltipBadge progress="60" name="magnolia" />
        <TooltipBadge progress="20" name="aem" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
