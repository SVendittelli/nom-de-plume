FROM node:18-alpine@sha256:58878e9e1ed3911bdd675d576331ed8838fc851607aed3bb91e25dfaffab3267 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c73d0509171d06c166a5e4ffb0b6a547623e5666f2764651f7dff7a3a97f2678 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
