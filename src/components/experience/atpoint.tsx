'use server';

import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { FC } from 'react';

import { useTranslations } from 'next-intl';
import { Dash, DashList } from '../dash_list';
import { Duties } from '../duties';
import { NoPageBreakBox } from '../print';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

export const Atpoint: FC = async () => {
  const t = useTranslations('Atpoint');
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
          <Link href={{ query: { video: 'post' } }} scroll={false} passHref>
            Post
          </Link>{' '}
          <Link href={{ query: { video: 'avaloq' } }} scroll={false} passHref>
            Avaloq
          </Link>{' '}
          <Link href={{ query: { video: 'trilux' } }} scroll={false} passHref>
            Trilux
          </Link>
          )
        </Dash>
        <Dash>
          {t('references.list.item2')} (
          <Link href={{ query: { video: 'kinect' } }} scroll={false} passHref>
            Demo
          </Link>
          )
        </Dash>
        <Dash>
          {t('references.list.item3')} (
          <Link href={{ query: { video: 'local' } }} scroll={false} passHref>
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
