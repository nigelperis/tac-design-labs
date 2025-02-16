FROM  node:20-alpine3.20 AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV HUSKY=0
RUN npm i -g corepack


FROM base AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./
RUN pnpm i --frozen-lockfile


FROM base AS builder
WORKDIR /app
ENV NODE_ENV=production
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS=""
ARG NEXT_PUBLIC_CLARITY_PROJECT_ID=""
ARG NEXT_PUBLIC_STRAPI_URL=""
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=${NEXT_PUBLIC_GOOGLE_ANALYTICS}
ENV NEXT_PUBLIC_CLARITY_PROJECT_ID=${NEXT_PUBLIC_CLARITY_PROJECT_ID}
ENV NEXT_PUBLIC_STRAPI_URL=${NEXT_PUBLIC_STRAPI_URL}
COPY . .
COPY --from=installer /app/node_modules ./node_modules
RUN pnpm build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN chown -R nextjs:nodejs  /app/.next
USER nextjs


ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000
CMD ["node", "server.js"]








