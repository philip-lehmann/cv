FROM bitnami/node:20.18.1 AS builder
WORKDIR /app
ARG SITE_URL=https://cv.philiplehmann.ch
ENV NODE_ENV=production
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN corepack enable; \
    yarn install --immutable

RUN pwd
RUN ls -al

# Production image, copy all the files and run next
FROM bitnami/node:20.18.1 AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY components ./components
COPY helpers ./helpers
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY .next ./.next
COPY next-env.d.ts ./next-env.d.ts
COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["node", "node_modules/.bin/next", "start"]