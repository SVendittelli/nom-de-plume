FROM node:18-alpine@sha256:4860d89cd9bbb0ebe99a7587fdf29413cafb1b25f7f80918302dfc40eb13fe20 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c73d0509171d06c166a5e4ffb0b6a547623e5666f2764651f7dff7a3a97f2678 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
