FROM node:20-alpine@sha256:1c411f88868d97e206a5fdb78cbcee49add59022ecf1f52d54f15e1d4518c5c2 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:c73d0509171d06c166a5e4ffb0b6a547623e5666f2764651f7dff7a3a97f2678 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
