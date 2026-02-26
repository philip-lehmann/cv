
# Production stage
FROM oven/bun:1.3.10 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"


RUN mkdir pdf; \
    mkdir -p dist/assets; \
    chown -R 1000:1000 .


COPY --chown=1000:1000 public ./public
COPY --chown=1000:1000 src ./src
COPY --chown=1000:1000 package.json bun.lock tsconfig.json global.d.ts ./

RUN bun install

USER 1000

EXPOSE $PORT

CMD ["bun", "--production", "src/index.ts"]
