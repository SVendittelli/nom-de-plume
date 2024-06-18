FROM node:18.20.3-alpine@sha256:6937be95129321422103452e2883021cc4a96b63c32d7947187fcb25df84fc3f as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:874ed94d7ff74b80db20778c784bf7e9bb56319827182389db3375fa84020542 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
