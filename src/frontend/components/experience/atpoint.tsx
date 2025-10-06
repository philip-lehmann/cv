import { Typography } from '@mui/material';
import type { FC } from 'react';
import { Dash, DashList } from '../dash_list';
import { Duties } from '../duties';
import { useLocale, useTranslations } from '../intl';
import { Link } from '../link';
import { NoPageBreakBox } from '../print';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

export const Atpoint: FC = () => {
  const t = useTranslations('Atpoint');
  const locale = useLocale();
  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Atpoint.roles1" duties={7} start="2020-09-01" end="2021-06-30" />
      <Duties namespace="Atpoint.roles2" duties={4} start="2010-06-01" end="2020-09-01" />
      <br />
      <Typography variant="h6">{t('references.name')}</Typography>
      <DashList>
        <Dash>
          {t('references.list.item1')} (
          <Link href={{ pathname: `/${locale}`, query: { video: 'post' } }} local>
            Post
          </Link>{' '}
          <Link href={{ pathname: `/${locale}`, query: { video: 'avaloq' } }} local>
            Avaloq
          </Link>{' '}
          <Link href={{ pathname: `/${locale}`, query: { video: 'trilux' } }} local>
            Trilux
          </Link>
          )
        </Dash>
        <Dash>
          {t('references.list.item2')} (
          <Link href={{ pathname: `/${locale}`, query: { video: 'kinect' } }} local>
            Demo
          </Link>
          )
        </Dash>
        <Dash>
          {t('references.list.item3')} (
          <Link href={{ pathname: `/${locale}`, query: { video: 'local' } }} local>
            Demo
          </Link>
          )
        </Dash>
      </DashList>
      <TooltipBadgeGroup>
        <TooltipBadge progress="80" name="ruby" />
        <TooltipBadge progress="80" name="rails" />
        <TooltipBadge progress="90" name="es6" />
        <TooltipBadge progress="85" name="typescript" />
        <TooltipBadge progress="85" name="flow" />
        <TooltipBadge progress="70" name="scss" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="95" name="react" />
        <TooltipBadge progress="80" name="ember" />
        <TooltipBadge progress="90" name="webpack" />
        <TooltipBadge progress="60" name="selenium" />
        <TooltipBadge progress="90" name="node" />
        <TooltipBadge progress="50" name="objective-c" />
        <TooltipBadge progress="60" name="java" />
        <TooltipBadge progress="70" name="php" />
        <TooltipBadge progress="80" name="mysql" />
        <TooltipBadge progress="85" name="postgres" />
        <TooltipBadge progress="65" name="elasticsearch" />
        <TooltipBadge progress="80" name="git" />
        <TooltipBadge progress="75" name="docker" />
        <TooltipBadge progress="30" name="kustomize" />
        <TooltipBadge progress="30" name="helm" />
        <TooltipBadge progress="10" name="azure" />
        <TooltipBadge progress="10" name="aws" />
        <TooltipBadge progress="90" name="heroku" />
        <TooltipBadge progress="60" name="wordpress" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
