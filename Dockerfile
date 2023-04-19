FROM node:18-alpine@sha256:ca5d399560a9d239cbfa28eec00417f1505e5e108f3ec6938d230767eaa81f61 as build

WORKDIR /app
COPY . .

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11:latest@sha256:1fd03807e02eeb78efaacb0e38e8e68ead0639733e92e7cc9a9e017cd9b50bbf as production

COPY --from=build /app /app
WORKDIR /app

CMD [ "src/index.js" ]
