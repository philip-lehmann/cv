import type { FC } from 'react';

type TwitterProps = {
  title: string;
  url: string;
};

export const Twitter: FC<TwitterProps> = ({ title, url }) => {
  return (
    <>
      <meta name="twitter:card" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={`${url}/static/android-chrome-192x192.png`} />
      <meta name="twitter:creator" content="@philiplehmann" />
    </>
  );
};
