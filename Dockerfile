FROM node:18-alpine@sha256:8942c014f3c3c445bb74f2ae6dfe0a024fe4b56990dabfcd87c06134d9797f98 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:13a2e3e503bba93f569316fd1606a6cbd4edd24e7d22023f433f9342cc68d7a9 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
