FROM node:18-alpine@sha256:9036ddb8252ba7089c2c83eb2b0dcaf74ff1069e8ddf86fe2bd6dc5fecc9492d as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:13a2e3e503bba93f569316fd1606a6cbd4edd24e7d22023f433f9342cc68d7a9 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
