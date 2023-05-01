FROM node:18-alpine@sha256:ca5d399560a9d239cbfa28eec00417f1505e5e108f3ec6938d230767eaa81f61 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:1d068dbc7a400b506c96af7799ea5eac2abbf695c7142c0695c4b054c144abfb as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
