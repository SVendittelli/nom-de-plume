FROM node:18-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:dd8857b47881d5db49ff47089de4866178b71b24558a8583c20250754a387b7d as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
