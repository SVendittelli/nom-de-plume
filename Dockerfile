FROM node:18-alpine@sha256:1ccc70acda680aa4ba47f53e7c40b2d4d6892de74817128e0662d32647dd7f4d as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:1d068dbc7a400b506c96af7799ea5eac2abbf695c7142c0695c4b054c144abfb as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
