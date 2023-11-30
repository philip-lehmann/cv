FROM bitnami/node:20.10.0 AS builder
WORKDIR /app
ARG NPM_TOKEN
ARG SITE_URL=https://cv.philiplehmann.ch
ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY . .
RUN yarn install --immutable && \
    yarn build

# Production image, copy all the files and run next
FROM bitnami/node:20.10.0 AS runner
WORKDIR /app

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0 \
                       wget gnupg \
                       fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
                       libgtk2.0-0 libdrm2 libxkbcommon0 \
                       chromium && \
    mkdir -p /tmp/.yarn-cache && chown -R 1001:1001 /tmp/.yarn-cache && \
    mkdir -p /home/cv/.cache/yarn && chown -R 1001:1001 /home/cv && \
    touch yarn-error.log && chown -R 1001:1001 yarn-error.log


COPY --from=builder --chown=1001:1001 /app/package.json ./package.json
COPY --from=builder --chown=1001:1001 /app/yarn.lock ./yarn.lock
COPY --from=builder --chown=1001:1001 /app/node_modules ./node_modules
COPY --from=builder --chown=1001:1001 /app/components ./components
COPY --from=builder --chown=1001:1001 /app/helpers ./helpers
COPY --from=builder --chown=1001:1001 /app/pages ./pages
COPY --from=builder --chown=1001:1001 /app/public ./public
COPY --from=builder --chown=1001:1001 /app/styles ./styles
COPY --from=builder --chown=1001:1001 /app/.next ./.next
COPY --from=builder --chown=1001:1001 /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder --chown=1001:1001 /app/next.config.js ./next.config.js
COPY --from=builder --chown=1001:1001 /app/tsconfig.json ./tsconfig.json

RUN chown -R 1001:1001 /home/cv/ && \
    chown -R 1001:1001 /app && chmod 700 /app

USER 1001
RUN chown -R 1001:1001 /app

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "node_modules/.bin/next", "start"]