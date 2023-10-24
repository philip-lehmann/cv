FROM bitnami/node:20.9.0 AS builder
WORKDIR /app
ARG NPM_TOKEN
ARG SITE_URL=https://cv.philiplehmann.ch
ENV NODE_ENV=production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY . .
RUN yarn install --immutable && \
    yarn build

# Production image, copy all the files and run next
FROM bitnami/node:20.9.0 AS runner
WORKDIR /app

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0 \
                       wget gnupg \
                       fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
                       libgtk2.0-0 libdrm2 libxkbcommon0 \
                       chromium && \
    useradd -r cv && \
    mkdir -p /tmp/.yarn-cache && chown -R cv:cv /tmp/.yarn-cache && \
    mkdir -p /home/cv/.cache/yarn && chown -R cv:cv /home/cv && \
    touch yarn-error.log && chown -R cv:cv yarn-error.log


COPY --from=builder --chown=cv:cv /app/package.json ./package.json
COPY --from=builder --chown=cv:cv /app/yarn.lock ./yarn.lock
COPY --from=builder --chown=cv:cv /app/node_modules ./node_modules
COPY --from=builder --chown=cv:cv /app/components ./components
COPY --from=builder --chown=cv:cv /app/helpers ./helpers
COPY --from=builder --chown=cv:cv /app/pages ./pages
COPY --from=builder --chown=cv:cv /app/public ./public
COPY --from=builder --chown=cv:cv /app/styles ./styles
COPY --from=builder --chown=cv:cv /app/.next ./.next
COPY --from=builder --chown=cv:cv /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder --chown=cv:cv /app/next.config.js ./next.config.js
COPY --from=builder --chown=cv:cv /app/tsconfig.json ./tsconfig.json

RUN chown -R cv:cv /home/cv/ && \
    chown -R cv:cv /app && chmod 700 /app

USER cv

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]