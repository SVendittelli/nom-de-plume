FROM node:18-alpine@sha256:1ccc70acda680aa4ba47f53e7c40b2d4d6892de74817128e0662d32647dd7f4d as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:13a2e3e503bba93f569316fd1606a6cbd4edd24e7d22023f433f9342cc68d7a9 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
