FROM bitnami/node:22.14.0 AS builder
WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

RUN corepack enable; \
    yarn workspaces focus --production; \
    yarn install --immutable

# Production image, copy all the files and run next
FROM bitnami/node:22.14.0 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY src ./src
COPY public ./public
COPY .next ./.next
COPY next-env.d.ts ./next-env.d.ts
COPY next.config.mjs ./next.config.mjs
COPY tsconfig.json ./tsconfig.json

COPY --from=builder /app/node_modules ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["node", "node_modules/.bin/next", "start"]