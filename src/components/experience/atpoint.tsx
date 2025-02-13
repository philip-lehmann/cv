'use server';

import type { FC } from 'react';
import { Typography } from '@mui/material';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { DashList, Dash } from '../dash_list';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const Atpoint: FC = async () => {
  const t = useTranslations('Atpoint');
  return (
    <>
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
        <TooltipBadge namespace="atpoint" progress="80" name="ruby" />
        <TooltipBadge namespace="atpoint" progress="80" name="rails" />
        <TooltipBadge namespace="atpoint" progress="90" name="es6" />
        <TooltipBadge namespace="atpoint" progress="85" name="typescript" />
        <TooltipBadge namespace="atpoint" progress="85" name="flow" />
        <TooltipBadge namespace="atpoint" progress="70" name="scss" />
        <TooltipBadge namespace="atpoint" progress="90" name="html" />
        <TooltipBadge namespace="atpoint" progress="95" name="react" />
        <TooltipBadge namespace="atpoint" progress="80" name="ember" />
        <TooltipBadge namespace="atpoint" progress="90" name="webpack" />
        <TooltipBadge namespace="atpoint" progress="60" name="selenium" />
        <TooltipBadge namespace="atpoint" progress="90" name="node" />
        <TooltipBadge namespace="atpoint" progress="50" name="objective-c" />
        <TooltipBadge namespace="atpoint" progress="60" name="java" />
        <TooltipBadge namespace="atpoint" progress="70" name="php" />
        <TooltipBadge namespace="atpoint" progress="80" name="mysql" />
        <TooltipBadge namespace="atpoint" progress="85" name="postgres" />
        <TooltipBadge namespace="atpoint" progress="65" name="elasticsearch" />
        <TooltipBadge namespace="atpoint" progress="80" name="git" />
        <TooltipBadge namespace="atpoint" progress="75" name="docker" />
        <TooltipBadge namespace="atpoint" progress="30" name="kustomize" />
        <TooltipBadge namespace="atpoint" progress="30" name="helm" />
        <TooltipBadge namespace="atpoint" progress="10" name="azure" />
        <TooltipBadge namespace="atpoint" progress="10" name="aws" />
        <TooltipBadge namespace="atpoint" progress="90" name="heroku" />
        <TooltipBadge namespace="atpoint" progress="60" name="wordpress" />
      </TooltipBadgeGroup>
    </>
  );
};
