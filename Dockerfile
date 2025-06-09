
# Production stage
FROM bitnami/node:22.15.0 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

# Set correct permissions
RUN chown -R 1000:1000 /app
USER 1000

# Next.js collects completely anonymous telemetry data about general usage.
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE $PORT

CMD ["node", "server.js"]