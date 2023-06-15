FROM node:18-alpine@sha256:402b5278a24c69d57a9d978aee94df08dc3fbdc310a78538f5df09b474550ac3 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:13a2e3e503bba93f569316fd1606a6cbd4edd24e7d22023f433f9342cc68d7a9 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
