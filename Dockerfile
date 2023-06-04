FROM node:18-alpine@sha256:5850491d7879608eb7f7f7fe5beecd946b8b811356dab83c02699d7d77de61a2 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:13a2e3e503bba93f569316fd1606a6cbd4edd24e7d22023f433f9342cc68d7a9 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
