FROM node:18-alpine as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
