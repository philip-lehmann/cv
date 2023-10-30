import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { LineBreak } from '@cv/components/print';
import { monthYear } from '@cv/helpers/date';
import Link from 'next/link';
import { useLocale } from '@cv/helpers/use_locale';

export const Atpoint: FC = () => {
  const locale = useLocale();
  return (
    <>
      <LineBreak />
      <H5>atpoint ag</H5>
      <div>
        <FloatRight>
          {monthYear('2020-09-01', { locale: locale })} - {monthYear('2021-06-30', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Head of Development</T>
          <T lang="de">Head of Development</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Lead, evaluate and monitor software development process</T>
          <T lang="de">Software-Entwicklungsprozess leiten, bewerten und überwachen</T>
        </Dash>
        <Dash>
          <T lang="en">Analyze and resolve software defects, improve and optimize existing functionality</T>
          <T lang="de">
            Analysieren und Beheben von Softwarefehlern, Verbessern und Optimieren der bestehenden Funktionalität
          </T>
        </Dash>
        <Dash>
          <T lang="en">Architect reusable and maintainable software components</T>
          <T lang="de">Entwerfen von wiederverwendbaren und wartbaren Softwarekomponenten</T>
        </Dash>
        <Dash>
          <T lang="en">Project planning, estimation and controlling</T>
          <T lang="de">Projektplanung, -kalkulation und -kontrolle</T>
        </Dash>
        <Dash>
          <T lang="en">Create project roadmap and define project setup</T>
          <T lang="de">Projekt-Roadmap erstellen und Projektaufbau definieren</T>
        </Dash>
        <Dash>
          <T lang="en">Quality and security control of projects</T>
          <T lang="de">Qualitäts- und Sicherheitskontrolle von Projekten</T>
        </Dash>
        <Dash>
          <T lang="en">
            Manage and coach software development team (5 employees, incl. recruitment, performance reviews, know-how
            transfers)
          </T>
          <T lang="de">
            Leitung und Coaching des Software-Entwicklungsteams (5 Mitarbeiter, inkl. Rekrutierung,
            Leistungsbeurteilung, Know-how-Transfer)
          </T>
        </Dash>
      </DashList>
      <br />
      <div>
        <FloatRight>
          {monthYear('2010-06-01', { locale: locale })} - {monthYear('2020-09-01', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Software Engineer</T>
          <T lang="de">Software Engineer</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Agile and innovative software development</T>
          <T lang="de">Agile und innovative Softwareentwicklung</T>
        </Dash>
        <Dash>
          <T lang="en">Improve the functionality, usability, architecture and quality of the software</T>
          <T lang="de">Verbessern der Funktionalität, Benutzerfreundlichkeit, Architektur und Qualität der Software</T>
        </Dash>
        <Dash>
          <T lang="en">Specify, implement, test and document software</T>
          <T lang="de">Spezifizieren, implementieren, testen und dokumentieren von Software</T>
        </Dash>
        <Dash>
          <T lang="en">Set up production environments and create deployment pipelines</T>
          <T lang="de">Einrichten von Produktionsumgebungen und Erstellen von Deployment-Pipelines</T>
        </Dash>
        <Dash>
          <T lang="en">
            Further development of existing applications (maintenance and support, troubleshooting, continuous
            improvements of the existing code base)
          </T>
          <T lang="de">
            Weiterentwicklung bestehender Anwendungen (Wartung und Support, Fehlersuche, kontinuierliche Verbesserungen
            der bestehenden Codebasis)
          </T>
        </Dash>
      </DashList>
      <br />
      <H6>
        <T lang="en">Project references:</T>
        <T lang="de">Projekt Referenzen:</T>
      </H6>
      <DashList>
        <Dash>
          <T lang="en">
            Multitouch applications based on HTML5 with a REST API in Ruby on Rails with a synchronization over
            websockets in the case of Trilux
          </T>
          <T lang="de">
            Multitouch-Anwendungen auf Basis von HTML5 mit einer REST-API in Ruby on Rails mit einer Synchronisation
            über Websockets beim Beispiel Trilux
          </T>{' '}
          (
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
          <T lang="en">Microsoft Kinect demo in HTML5</T>
          <T lang="de">Microsoft Kinect demo in HTML5</T> (
          <Link href={{ query: { video: 'kinect' } }} scroll={false} passHref>
            Demo
          </Link>
          )
        </Dash>

        <Dash>
          <T lang="en">iPad / Touch offline application in HTML5</T>
          <T lang="de">iPad / Touch Offline-Anwendung in HTML5</T> (
          <Link href={{ query: { video: 'local' } }} scroll={false} passHref>
            Demo
          </Link>
          )
        </Dash>
      </DashList>
      <TooltipBadge namespace="atpoint" progress="80" name="Ruby on Rails" />{' '}
      <TooltipBadge namespace="atpoint" progress="90" name="ES6" />{' '}
      <TooltipBadge namespace="atpoint" progress="85" name="Typescript" />{' '}
      <TooltipBadge namespace="atpoint" progress="85" name="Flow" />{' '}
      <TooltipBadge namespace="atpoint" progress="70" name="SCSS" />{' '}
      <TooltipBadge namespace="atpoint" progress="90" name="HTML" />{' '}
      <TooltipBadge namespace="atpoint" progress="95" name="React" />{' '}
      <TooltipBadge namespace="atpoint" progress="80" name="Ember" />{' '}
      <TooltipBadge namespace="atpoint" progress="90" name="node.js" />{' '}
      <TooltipBadge namespace="atpoint" progress="50" name="Objective-C" />{' '}
      <TooltipBadge namespace="atpoint" progress="60" name="Java" />{' '}
      <TooltipBadge namespace="atpoint" progress="70" name="PHP" />{' '}
      <TooltipBadge namespace="atpoint" progress="80" name="Mysql" />{' '}
      <TooltipBadge namespace="atpoint" progress="85" name="Postgres" />{' '}
      <TooltipBadge namespace="atpoint" progress="65" name="Elasticsearch" />{' '}
      <TooltipBadge namespace="atpoint" progress="80" name="Git" />{' '}
      <TooltipBadge namespace="atpoint" progress="75" name="Docker" />{' '}
      <TooltipBadge namespace="atpoint" progress="30" name="Kustomize" />{' '}
      <TooltipBadge namespace="atpoint" progress="30" name="Helm" />
    </>
  );
};
