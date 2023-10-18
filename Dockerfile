FROM node:18-alpine@sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:874ed94d7ff74b80db20778c784bf7e9bb56319827182389db3375fa84020542 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
