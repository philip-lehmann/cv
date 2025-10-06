/// <reference lib="dom" />

import { RouteProvider } from '@cv/components/route';
import { hydrateRoot } from 'react-dom/client';
import { createEmotionCache } from '../../../shared/createEmotionCache';
import Page from './page';

const cache = createEmotionCache();

const root = document.getElementById('root');
if (root) {
  hydrateRoot(
    root,
    <RouteProvider pathname={window.location.pathname} search={window.location.search}>
      <Page {...JSON.parse(document.body.dataset.appdata || '{}')} cache={cache} />
    </RouteProvider>,
  );
}
