import type { FC } from 'react';

type GoogleAnalyticsProps = {
  googleAnalyticsKey: string;
};

export const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ googleAnalyticsKey }: GoogleAnalyticsProps) => {
  if (!googleAnalyticsKey) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsKey}`} />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: needed here
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${googleAnalyticsKey}');`,
        }}
      />
    </>
  );
};
