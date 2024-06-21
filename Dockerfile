FROM node:18.20.3-alpine@sha256:ce8c18ad1dc0f9b980698e6de7a31293a7c95b0e8b8b3560270c1aff6d3eeeb6 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:492e41b27114961b09bc3f19253a625ab0dec5fa1d53f8a825bffb53827ea630 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
