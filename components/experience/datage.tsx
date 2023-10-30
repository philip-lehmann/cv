import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const Datage: FC = () => {
  const locale = useLocale();
  return (
    <>
      <H5>Datage</H5>
      <div>
        <FloatRight>
          {monthYear('2021-07-01', { locale: locale })} - <T lang="en">Now</T>
          <T lang="de">Jetzt</T>
        </FloatRight>
        <H6>
          <T lang="en">Founder & Developer</T>
          <T lang="de">Gründer & Entwickler</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Managing Kubernetes clusters and hosting projects</T>
          <T lang="de">Betreiben eines Kubernetes-Clusters und Hosting von Projekten</T>
        </Dash>
        <Dash>
          <T lang="en">
            Developing a Next.js frontend with a GraphQL backend, utilizing workers and a media engine as microservices
          </T>
          <T lang="de">
            Entwicklung einer Next.js-Frontend-Anwendung mit einem GraphQL-Backend unter Verwendung von Workers und
            einer Medien-Engine als Microservices
          </T>
        </Dash>
      </DashList>
      <TooltipBadge namespace="datage" progress="70" name="Rancher" />{' '}
      <TooltipBadge namespace="datage" progress="70" name="Postgres HA" />{' '}
      <TooltipBadge namespace="datage" progress="70" name="Redis Cluster" />{' '}
      <TooltipBadge namespace="datage" progress="60" name="OAuth Proxy" />{' '}
      <TooltipBadge namespace="datage" progress="60" name="Keycloak" />{' '}
      <TooltipBadge namespace="datage" progress="70" name="CertManager" />{' '}
      <TooltipBadge namespace="datage" progress="60" name="Sealed Secrets" />{' '}
      <TooltipBadge namespace="datage" progress="90" name="Typescript" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="Next.js" />{' '}
      <TooltipBadge namespace="datage" progress="70" name="Apollo GraphQL" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="prisma.io" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="MUI" />{' '}
      <TooltipBadge namespace="datage" progress="95" name="React" />{' '}
      <TooltipBadge namespace="datage" progress="90" name="node.js" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="BullMQ" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="Git" />{' '}
      <TooltipBadge namespace="datage" progress="85" name="Docker" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="VS Code" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="Github" />{' '}
      <TooltipBadge namespace="datage" progress="80" name="Github Action Runner" />{' '}
      <TooltipBadge namespace="datage" progress="70" name="Harbor" />{' '}
      <TooltipBadge namespace="datage" progress="50" name="ECK" />{' '}
    </>
  );
};
