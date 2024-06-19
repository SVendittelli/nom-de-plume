FROM node:18.20.3-alpine@sha256:6937be95129321422103452e2883021cc4a96b63c32d7947187fcb25df84fc3f as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:492e41b27114961b09bc3f19253a625ab0dec5fa1d53f8a825bffb53827ea630 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
