import { env } from '@cv/helpers/env';
import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';

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
    production: env.NODE_ENV === 'production',
    minify:
      env.NODE_ENV === 'production'
        ? {
            identifiers: true,
            syntax: true,
            whitespace: true,
          }
        : false,
    outdir: 'dist/assets',
  });
  if (result.success) {
    return result.outputs;
  }
  return [];
};

export const assetPath = (build: Bun.BuildArtifact) => `/${build.path.replace(/^(\.\/|\/)+/, '')}`;

const createStaticRoutes = async (builds: Bun.BuildArtifact[]) => {
  let route = new Elysia({ prefix: '/static' }).use(staticPlugin({ prefix: '/', assets: 'public' }));

  const buildsWithSourcemaps = builds.flatMap((build) => {
    return build.sourcemap ? [build, build.sourcemap] : [build];
  });
  for (const build of buildsWithSourcemaps) {
    const cleanPath = assetPath(build);
    console.log(`static asset: ${cleanPath}, ${build.type}, ${build.kind}`);
    route = route.get(cleanPath, async () => {
      return new Response(await build.arrayBuffer(), {
        headers: {
          'Content-Type': build.type,
        },
      });
    });
  }
  return route;
};

export const assetBuilds = await bunBuildAsset('src/frontend/pages/cv/main.tsx');
export const staticRoute = createStaticRoutes(assetBuilds);
