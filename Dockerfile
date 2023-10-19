FROM node:18-alpine@sha256:435dcad253bb5b7f347ebc69c8cc52de7c912eb7241098b920f2fc2d7843183d as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:874ed94d7ff74b80db20778c784bf7e9bb56319827182389db3375fa84020542 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
