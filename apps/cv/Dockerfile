
# Production stage
FROM oven/bun:1.4.2 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"


COPY package.json bun.lock tsconfig.json ./
COPY apps/cv/tsconfig.json ./apps/cv/tsconfig.json
COPY apps/cv/public ./apps/cv/public
COPY apps/cv/src ./apps/cv/src

RUN bun install; \
    mkdir -p apps/cv/pdf dist/apps/cv/assets; \
    chown -R 1000:1000 apps/cv/public apps/cv/src apps/cv/pdf dist/apps/cv/assets package.json bun.lock tsconfig.json apps/cv/tsconfig.json node_modules; \
    chmod -R u=rX,go= apps/cv/public apps/cv/src package.json bun.lock tsconfig.json apps/cv/tsconfig.json node_modules; \
    chmod -R u=rwX,go= apps/cv/pdf dist/apps/cv/assets

USER 1000

EXPOSE $PORT

CMD ["bun", "--production", "apps/cv/src/index.ts"]
