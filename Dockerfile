
# Production stage
FROM oven/bun:1.3.6 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN mkdir pdf; \
    chown 1000:1000 pdf

COPY --chown=1000:1000 .next/standalone ./
COPY --chown=1000:1000 .next/static ./.next/static
COPY --chown=1000:1000 public ./public

USER 1000

# Next.js collects completely anonymous telemetry data about general usage.
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE $PORT

CMD ["bun", "server.js"]