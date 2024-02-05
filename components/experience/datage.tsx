import type { FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
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
