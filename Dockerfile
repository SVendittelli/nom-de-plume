FROM node:20-alpine@sha256:002b6ee25b63b81dc4e47c9378ffe20915c3fa0e98e834c46584438468b1d0b5 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:874ed94d7ff74b80db20778c784bf7e9bb56319827182389db3375fa84020542 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
