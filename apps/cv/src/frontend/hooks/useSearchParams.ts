'use client';

import { useRoute } from '@cv/components/route';
import { useEffect, useState } from 'react';

export const pushState = (data: unknown, unused: string, url?: string | URL | null) => {
  history.pushState(data, unused, url);
  globalThis.dispatchEvent(new CustomEvent('pushState', { bubbles: false, composed: false, cancelable: true }));
};

export const replaceState = (data: unknown, unused: string, url?: string | URL | null) => {
  history.replaceState(data, unused, url);
  globalThis.dispatchEvent(new CustomEvent('replaceState', { bubbles: false, composed: false, cancelable: true }));
};

export const useSearchParams = () => {
  const location = useRoute();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    const fn = () => {
      setSearchParams(new URLSearchParams(globalThis.location.search));
    };
    globalThis.addEventListener('pushState', fn);
    globalThis.addEventListener('replaceState', fn);
    globalThis.addEventListener('popstate', fn);
    return () => {
      globalThis.removeEventListener('pushState', fn);
      globalThis.removeEventListener('replaceState', fn);
      globalThis.removeEventListener('popstate', fn);
    };
  }, []);

  return searchParams;
};
