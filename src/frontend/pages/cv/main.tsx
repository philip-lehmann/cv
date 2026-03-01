/// <reference lib="dom" />

import type { Messages } from '@cv/components/intl';
import { RouteProvider } from '@cv/components/route';
import { FaroErrorBoundary, getWebInstrumentations, initializeFaro } from '@grafana/faro-react';
import type { AppData } from 'global';
import { hydrateRoot } from 'react-dom/client';
import { createEmotionCache } from '../../../shared/createEmotionCache';
import Page from './page';

const cache = createEmotionCache();
const appData = JSON.parse(document.body.dataset.appdata || '{}') as AppData & { messages: Messages };

const faro =
  appData.faroUrl && appData.faroApiKey
    ? initializeFaro({
        url: appData.faroUrl,
        apiKey: appData.faroApiKey,
        app: {
          name: 'cv',
          environment: appData.env,
        },
        instrumentations: getWebInstrumentations(),
        experimental: { trackNavigation: true },
      })
    : undefined;

const updateView = () => {
  faro?.api.setView({ name: `${window.location.pathname}${window.location.search}` });
};

if (faro) {
  updateView();

  const patchHistory = (method: 'pushState' | 'replaceState') => {
    const original = history[method];
    history[method] = function (this: History, ...args: Parameters<History['pushState']>) {
      const result = original.apply(this, args as Parameters<History['pushState']>);
      updateView();
      return result;
    } as History['pushState'];
  };

  patchHistory('pushState');
  patchHistory('replaceState');
  window.addEventListener('popstate', updateView);
}

const root = document.getElementById('root');
if (root) {
  hydrateRoot(
    root,
    <RouteProvider pathname={window.location.pathname} search={window.location.search}>
      <FaroErrorBoundary>
        <Page {...appData} cache={cache} />
      </FaroErrorBoundary>
    </RouteProvider>,
  );
}
