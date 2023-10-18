FROM node:18-alpine@sha256:0fe7402d11d8c85474c6ec6f9c9c8048cd0549c95535832b7f0735a4b47690a5 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:874ed94d7ff74b80db20778c784bf7e9bb56319827182389db3375fa84020542 as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
