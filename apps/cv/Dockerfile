
# Production stage
FROM oven/bun:1.3.12 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"


COPY apps/cv/public ./public
COPY apps/cv/src ./src
COPY package.json bun.lock ./

RUN bun install; \
    mkdir -p pdf dist/assets; \
    chown -R 1000:1000 pdf dist/assets; \
    chmod -R a-w public src package.json bun.lock node_modules

USER 1000

EXPOSE $PORT

CMD ["bun", "--production", "src/index.ts"]
