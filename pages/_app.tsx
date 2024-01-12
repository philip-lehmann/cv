import type { FC } from 'react';
import { type AppProps } from 'next/app';

const MyCv: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyCv;
