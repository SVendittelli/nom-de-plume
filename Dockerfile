FROM node:18-alpine@sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:dd8857b47881d5db49ff47089de4866178b71b24558a8583c20250754a387b7d as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
