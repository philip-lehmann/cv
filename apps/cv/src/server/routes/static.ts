import { env } from '@cv/helpers/env';
import { logError, logInfo } from '@cv/helpers/log';
import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';

const assetsPath = 'dist/apps/cv/assets';
const publicPath = 'apps/cv/public';
const assetEntry = 'apps/cv/src/frontend/pages/cv/main.tsx';

const bunBuildAsset = async (asset: string | string[]) => {
  const entrypoints = Array.isArray(asset) ? asset : [asset];
  const result = await Bun.build({
    entrypoints,
    target: 'browser',
    splitting: true,
    sourcemap: 'linked',
    naming: {
      entry: '[dir]/[name]-[hash].[ext]',
      chunk: 'chunks/[name]-[hash].[ext]',
      asset: 'assets/[name]-[hash].[ext]',
    },
    minify:
      env.NODE_ENV === 'production'
        ? {
            identifiers: true,
            syntax: true,
            whitespace: true,
          }
        : false,
    outdir: assetsPath,
  });
  if (!result.success) {
    logError('asset_build_failed', { entrypoints });
    for (const log of result.logs) {
      logError('asset_build_log', { log });
    }
    throw new Error(`Failed to build assets: ${entrypoints.join(', ')}`);
  }
  return result.outputs;
};

export const assetPath = (build: Bun.BuildArtifact) => {
  // build.path is an absolute filesystem path when outdir is set
  // Extract the path relative to the outdir (dist/apps/cv/assets)
  const pathStr = build.path;
  const outdirIndex = pathStr.indexOf(assetsPath);

  if (outdirIndex !== -1) {
    // Extract everything after 'dist/apps/cv/assets'
    const relativePath = pathStr.slice(outdirIndex + assetsPath.length);
    return `/${relativePath.replace(/^\/+/, '')}`;
  }

  // Fallback for unexpected path formats
  return `/${pathStr.replace(/^(\.\/|\/)+/, '')}`;
};

const serveTextFile = (root: Elysia, urlPath: string, filePath: string) => {
  return root.get(urlPath, async () => {
    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return new Response('Not Found', { status: 404 });
    }
    return new Response(file, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  });
};

const createStaticRoutes = (builds: Bun.BuildArtifact[]) => {
  let route = new Elysia();
  route = serveTextFile(route, '/robots.txt', `${publicPath}/robots.txt`);
  route = serveTextFile(route, '/.well-known/security.txt', `${publicPath}/.well-known/security.txt`);

  let staticRoute = new Elysia({ prefix: '/static' }).use(staticPlugin({ prefix: '/', assets: publicPath }));

  const buildsWithSourcemaps = builds.flatMap((build) => {
    return build.sourcemap ? [build, build.sourcemap] : [build];
  });
  for (const build of buildsWithSourcemaps) {
    const cleanPath = assetPath(build);
    logInfo('static_asset_registered', { path: cleanPath, type: build.type, kind: build.kind });
    staticRoute = staticRoute.get(cleanPath, async () => {
      return new Response(Bun.file(build.path), {
        headers: {
          'Content-Type': build.type,
          'Cache-Control': env.NODE_ENV === 'production' ? 'public, max-age=31536000, immutable' : 'no-cache',
        },
      });
    });
  }

  route.use(staticRoute);
  return route;
};

export const assetBuilds = await bunBuildAsset(assetEntry);
export const staticRoute = createStaticRoutes(assetBuilds);
