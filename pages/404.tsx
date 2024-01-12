import { useEffect } from 'react';
import { NextPage } from 'next';
import { Trans as T } from '@cv/components/trans';

const NotFound: NextPage = () => {
  useEffect(() => {
    if (window) {
      window.addEventListener('error', () => {
        // eslint-disable-next-line no-console
        console.error('404 page not found', window.location.href);
      });
    }
  }, []);
  return (
    <p>
      <T lang="en">Page could not be found</T>
      <T lang="de">Seite konnte nicht gefunden werden</T>
    </p>
  );
};

export default NotFound;
