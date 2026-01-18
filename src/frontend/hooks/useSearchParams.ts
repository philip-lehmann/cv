'use client';

import { useRoute } from '@cv/components/route';
import { useEffect, useState } from 'react';

export const pushState = (data: unknown, unused: string, url?: string | URL | null) => {
  history.pushState(data, unused, url);
  window.dispatchEvent(new CustomEvent('pushState', { bubbles: false, composed: false, cancelable: true }));
};

export const replaceState = (data: unknown, unused: string, url?: string | URL | null) => {
  history.replaceState(data, unused, url);
  window.dispatchEvent(new CustomEvent('replaceState', { bubbles: false, composed: false, cancelable: true }));
};

export const useSearchParams = () => {
  const location = useRoute();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    const fn = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };
    window.addEventListener('pushState', fn);
    window.addEventListener('replaceState', fn);
    window.addEventListener('popstate', fn);
    return () => {
      window.removeEventListener('pushState', fn);
      window.removeEventListener('replaceState', fn);
      window.removeEventListener('popstate', fn);
    };
  }, []);

  return searchParams;
};
