import React, { type FC } from 'react';

type MetaProps = {
  title: string;
};

export const Meta: FC<MetaProps> = ({ title }) => {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />

      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={title} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="none" />

      <meta name="msapplication-TileColor" content="#e9e9eb" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
    </>
  );
};
