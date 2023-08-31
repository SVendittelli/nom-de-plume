FROM node:18-alpine@sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:117e714f608555028a18c8162db6246557ec667159d18714a4dd7a9ee5948be2 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
