import { env } from '@cv/helpers/env';
import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';

const assetsPath = 'dist/assets';

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
    console.error('Asset build failed:');
    for (const log of result.logs) {
      console.error(log);
    }
    throw new Error(`Failed to build assets: ${entrypoints.join(', ')}`);
  }
  return result.outputs;
};

export const assetPath = (build: Bun.BuildArtifact) => {
  // build.path is an absolute filesystem path when outdir is set
  // Extract the path relative to the outdir (dist/assets)
  const pathStr = build.path;
  const outdirIndex = pathStr.indexOf(assetsPath);

  if (outdirIndex !== -1) {
    // Extract everything after 'dist/assets'
    const relativePath = pathStr.slice(outdirIndex + assetsPath.length);
    return `/${relativePath.replace(/^\/+/, '')}`;
  }

  // Fallback for unexpected path formats
  return `/${pathStr.replace(/^(\.\/|\/)+/, '')}`;
};

const createStaticRoutes = (builds: Bun.BuildArtifact[]) => {
  const route = ['robots.txt', '.well-known'].reduce((root, asset) => {
    return root.get(`/${asset}`, async () => {
      const file = Bun.file(`public/${asset}`);
      return new Response(file.stream(), {
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    });
  }, new Elysia());

  let staticRoute = new Elysia({ prefix: '/static' }).use(staticPlugin({ prefix: '/', assets: 'public' }));

  const buildsWithSourcemaps = builds.flatMap((build) => {
    return build.sourcemap ? [build, build.sourcemap] : [build];
  });
  for (const build of buildsWithSourcemaps) {
    const cleanPath = assetPath(build);
    console.log(`static asset: ${cleanPath}, ${build.type}, ${build.kind}`);
    staticRoute = staticRoute.get(cleanPath, async () => {
      return new Response(await build.arrayBuffer(), {
        headers: {
          'Content-Type': build.type,
        },
      });
    });
  }

  route.use(staticRoute);
  return route;
};

export const assetBuilds = await bunBuildAsset('src/frontend/pages/cv/main.tsx');
export const staticRoute = createStaticRoutes(assetBuilds);
