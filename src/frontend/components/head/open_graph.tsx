import type { FC } from 'react';

type OpenGraphProps = {
  title: string;
  url: string;
};

export const OpenGraph: FC<OpenGraphProps> = ({ title, url }) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/static/apple-touch-icon.png`} />
    </>
  );
};
